// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 2917:
case 1399:
case 1004:
case 2829:
case 2737:
case 2487:
case 2606:
case 1197:
case 3137:
case 2496:
case 2640:
case 975:
case 3383:
case 267:
case 208:
case 1962:
case 2841:
case 3388:
case 564:
case 3666:
case 834:
case 1901:
case 455:
case 3280:
case 3600:
case 2802:
case 2973:
case 3490:
case 26:
case 1274:
case 1942:
case 1187:
case 2296:
case 2497:
case 1810:
case 970:
case 679:
case 1333:
case 1196:
case 2607:
case 3136:
case 1224:
case 209:
case 1474:
case 681:
case 3724:
case 3910:
case 2124:
case 1790:
case 3667:
case 411:
case 3650:
case 450:
case 3902:
case 1978:
case 1487:
case 1660:
case 3797:
case 2197:
case 1286:
case 2186:
case 1035:
case 1496:
case 3786:
case 664:
case 1174:
case 4073:
case 852:
case 3625:
case 3180:
case 3929:
case 2780:
case 1802:
case 3817:
case 1973:
case 3044:
case 498:
case 1861:
case 666:
case 2187:
case 4028:
case 1497:
case 2389:
case 4016:
case 579:
case 3823:
case 3952:
case 1879:
case 1928:
case 3796:
case 85:
case 1607:
case 3085:
case 1287:
case 2230:
case 924:
case 3979:
case 421:
case 2338:
case 3828:
case 109:
case 2611:
case 2790:
case 4023:
case 1130:
case 2595:
case 2396:
case 3913:
case 1826:
case 3653:
case 1289:
case 1793:
case 1905:
case 3483:
case 4005:
case 3439:
case 3114:
case 633:
case 3504:
case 2189:
case 1233:
case 2865:
case 2387:
case 779:
case 952:
case 2894:
case 361:
case 1238:
case 3298:
case 2544:
case 1813:
case 3926:
case 1798:
case 2031:
case 2138:
case 723:
case 1622:
case 2668:
case 1433:
case 4055:
case 3493:
case 3554:
case 1299:
case 2585:
case 1919:
case 95:
case 3283:
case 1659:
case 3603:
case 2648:
case 3799:
case 2884:
case 3288:
case 47:
case 3855:
case 3380:
case 743:
case 597:
case 957:
case 3498:
case 253:
case 1788:
case 1438:
case 1396:
case 2877:
case 3336:
case 3535:
case 4034:
case 1845:
case 1133:
case 2609:
case 2818:
case 2905:
case 285:
case 2499:
case 533:
case 1865:
case 3820:
case 431:
case 713:
case 2238:
case 2324:
case 3965:
case 3669:
case 2813:
case 3649:
case 3198:
case 3945:
case 2622:
case 1668:
case 2783:
case 3671:
case 2299:
case 3183:
case 406:
case 1386:
case 766:
case 2919:
case 1397:
case 2827:
case 196:
case 2082:
case 3984:
case 2615:
case 2659:
case 3414:
case 2739:
case 2955:
case 2489:
case 4070:
case 386:
case 2672:
case 3870:
case 3188:
case 153:
case 1663:
case 1103:
case 1271:
case 1748:
case 1421:
case 3268:
case 1513:
case 2864:
case 2935:
case 2759:
case 2715:
case 3360:
case 776:
case 3115:
case 1904:
case 2017:
case 774:
case 828:
case 337:
case 3248:
case 2683:
case 2203:
case 1449:
case 2208:
case 2073:
case 2688:
case 3243:
case 2458:
case 751:
case 2565:
case 2346:
case 2545:
case 1577:
case 1526:
case 1518:
case 3263:
case 1001:
case 1743:
case 865:
case 2403:
case 535:
case 332:
case 3721:
case 283:
case 2121:
case 2028:
case 891:
case 2693:
case 2584:
case 1221:
case 3468:
case 1471:
case 1:
case 4054:
case 3122:
case 1576:
case 1269:
case 3463:
case 221:
case 3749:
case 3854:
case 2023:
case 2408:
case 299:
case 2367:
case 2748:
case 3995:
case 3148:
case 3703:
case 3041:
case 1935:
case 707:
case 3002:
case 1017:
case 3520:
case 4035:
case 3409:
case 1453:
case 3168:
case 1683:
case 2768:
case 1594:
case 1203:
case 1078:
case 1688:
case 3029:
case 1458:
case 3163:
case 255:
case 408:
case 2042:
case 70:
case 3272:
case 1366:
case 1565:
case 1346:
case 1545:
case 720:
case 46:
case 2577:
case 2062:
case 2526:
case 198:
case 141:
case 2001:
case 2469:
case 2108:
case 2954:
case 1016:
case 3052:
case 462:
case 1403:
case 183:
case 3209:
case 1253:
case 1121:
case 354:
case 1693:
case 2153:
case 3633:
case 2471:
case 3753:
case 2312:
case 1347:
case 725:
case 2527:
case 2375:
case 740:
case 1149:
case 2269:
case 1698:
case 2051:
case 1023:
case 1258:
case 211:
case 3079:
case 3311:
case 250:
case 1169:
case 3472:
case 393:
case 1885:
case 199:
case 1350:
case 769:
case 1707:
case 1636:
case 2112:
case 918:
case 525:
case 2561:
case 2034:
case 1321:
case 172:
case 615:
case 3013:
case 2541:
case 3207:
case 3460:
case 3687:
case 839:
case 3457:
case 1425:
case 1167:
case 2690:
case 2446:
case 3018:
case 231:
case 3501:
case 2529:
case 1349:
case 305:
case 2250:
case 3542:
case 2175:
case 2466:
case 1832:
case 3775:
case 610:
case 206:
case 3368:
case 3206:
case 1740:
case 1055:
case 3686:
case 919:
case 3456:
case 3407:
case 3260:
case 3240:
case 1757:
case 2070:
case 327:
case 520:
case 204:
case 2303:
case 342:
case 2579:
case 2308:
case 507:
case 3343:
case 2680:
case 2125:
case 2467:
case 2200:
case 2450:
case 3725:
case 1475:
case 1510:
case 3551:
case 3517:
case 1502:
case 3156:
case 640:
case 1561:
case 2992:
case 3094:
case 3578:
case 1353:
case 1034:
case 3309:
case 2321:
case 669:
case 3831:
case 1891:
case 1541:
case 2212:
case 3991:
case 3750:
case 735:
case 2425:
case 1931:
case 1446:
case 1690:
case 2150:
case 3630:
case 2275:
case 2369:
case 1358:
case 3211:
case 1466:
case 1267:
case 3065:
case 2371:
case 2982:
case 106:
case 991:
case 60:
case 317:
case 965:
case 887:
case 2740:
case 2055:
case 973:
case 948:
case 3140:
case 2706:
case 3160:
case 1552:
case 2757:
case 3157:
case 2760:
case 645:
case 3359:
case 104:
case 668:
case 3528:
case 496:
case 1579:
case 607:
case 31:
case 3523:
case 27:
case 1467:
case 1200:
case 3746:
case 3981:
case 3372:
case 2146:
case 1450:
case 2475:
case 2166:
case 1447:
case 3529:
case 1573:
case 3175:
case 3250:
case 3466:
case 4091:
case 1065:
case 3267:
case 2892:
case 3931:
case 3446:
case 3690:
case 2026:
case 2111:
case 546:
case 892:
case 1624:
case 2501:
case 331:
case 663:
case 3541:
case 2460:
case 2207:
case 2457:
case 2406:
case 978:
case 1517:
case 943:
case 2712:
case 3112:
case 3020:
case 222:
case 3561:
case 1309:
case 3034:
case 2932:
case 3353:
case 2882:
case 459:
case 2076:
case 2363:
case 897:
case 614:
case 22:
case 3579:
case 11:
case 1523:
case 3680:
case 3125:
case 3200:
case 486:
case 1981:
case 2725:
case 2240:
case 1516:
case 1315:
case 1106:
case 227:
case 2348:
case 1528:
case 1359:
case 242:
case 89:
case 1084:
case 117:
case 670:
case 2368:
case 1140:
case 2573:
case 2211:
case 701:
case 3832:
case 964:
case 2750:
case 2991:
case 3167:
case 461:
case 2767:
case 1077:
case 3275:
case 3150:
case 2630:
case 1111:
case 3369:
case 1018:
case 646:
case 2624:
case 372:
case 1013:
case 1207:
case 3005:
case 833:
case 1256:
case 2517:
case 2156:
case 122:
case 2094:
case 3992:
case 2309:
case 147:
case 2700:
case 2766:
case 3225:
case 1363:
case 490:
case 514:
case 2674:
case 12:
case 2411:
case 516:
case 2523:
case 624:
case 37:
case 1343:
case 3146:
case 2372:
case 2981:
case 1725:
case 2160:
case 3706:
case 1240:
case 3757:
case 2157:
case 3637:
case 2106:
case 3760:
case 1697:
case 1348:
case 142:
case 2084:
case 3982:
case 3371:
case 3019:
case 217:
case 734:
case 3412:
case 1456:
case 1407:
case 1835:
case 3772:
case 4044:
case 398:
case 23:
case 536:
case 3208:
case 3073:
case 1029:
case 3688:
case 770:
case 4064:
case 3565:
case 3366:
case 1272:
case 1215:
case 2340:
case 4095:
case 2771:
case 1168:
case 237:
case 3683:
case 3203:
case 3594:
case 3078:
case 3639:
case 1148:
case 1995:
case 188:
case 3759:
case 3864:
case 1041:
case 716:
case 2505:
case 3715:
case 2115:
case 657:
case 2443:
case 3258:
case 1311:
case 3169:
case 193:
case 1472:
case 399:
case 3885:
case 763:
case 3367:
case 2010:
case 3698:
case 2749:
case 3693:
case 501:
case 3709:
case 65:
case 2356:
case 1052:
case 3016:
case 813:
case 1570:
case 3403:
case 189:
case 3121:
case 1209:
case 2835:
case 3526:
case 3325:
case 3518:
case 1263:
case 2143:
case 3743:
case 3001:
case 13:
case 3469:
case 2029:
case 3763:
case 2163:
case 634:
case 2944:
case 2272:
case 2002:
case 1340:
case 2520:
case 2061:
case 1771:
case 2168:
case 2409:
case 2259:
case 3103:
case 3748:
case 3271:
case 2699:
case 3421:
case 1268:
case 2148:
case 288:
case 2703:
case 1357:
case 1505:
case 724:
case 843:
case 1854:
case 1443:
case 557:
case 997:
case 3249:
case 2472:
case 881:
case 2222:
case 1122:
case 1010:
case 3576:
case 3375:
case 3527:
case 3158:
case 3051:
case 256:
case 55:
case 3153:
case 2633:
case 3471:
case 1555:
case 1307:
case 3:
case 744:
case 2415:
case 1448:
case 2209:
case 254:
case 2738:
case 2977:
case 2488:
case 1649:
case 1945:
case 1198:
case 3031:
case 3138:
case 4065:
case 2918:
case 2805:
case 2390:
case 3894:
case 1965:
case 1669:
case 3920:
case 2439:
case 682:
case 2293:
case 3189:
case 412:
case 3595:
case 825:
case 1535:
case 2913:
case 840:
case 4094:
case 3133:
case 1193:
case 1214:
case 2733:
case 1870:
case 1188:
case 1081:
case 353:
case 2498:
case 159:
case 2976:
case 2927:
case 68:
case 2819:
case 2608:
case 186:
case 2288:
case 807:
case 2380:
case 2855:
case 868:
case 3397:
case 820:
case 1337:
case 2283:
case 3199:
case 1414:
case 1139:
case 538:
case 3668:
case 3970:
case 687:
case 1183:
case 80:
case 417:
case 1488:
case 2649:
case 1658:
case 729:
case 405:
case 773:
case 44:
case 4018:
case 1390:
case 2834:
case 791:
case 4026:
case 3499:
case 385:
case 1114:
case 1789:
case 1293:
case 639:
case 3233:
case 815:
case 3826:
case 422:
case 2336:
case 3609:
case 2193:
case 1483:
case 3905:
case 1733:
case 874:
case 190:
case 760:
case 42:
case 2081:
case 3788:
case 1927:
case 286:
case 1288:
case 749:
case 400:
case 3919:
case 427:
case 2337:
case 442:
case 3659:
case 3955:
case 3739:
case 1799:
case 3433:
case 380:
case 587:
case 2183:
case 810:
case 935:
case 1625:
case 1180:
case 3802:
case 1929:
case 3973:
case 2646:
case 1817:
case 1878:
case 3861:
case 308:
case 3841:
case 1064:
case 2388:
case 3174:
case 1941:
case 830:
case 2862:
case 1237:
case 3035:
case 3297:
case 3640:
case 1436:
case 1786:
case 528:
case 3917:
case 1902:
case 1797:
case 3606:
case 1961:
case 3657:
case 493:
case 2667:
case 2730:
case 2480:
case 2650:
case 3130:
case 1190:
case 2290:
case 1675:
case 1979:
case 3852:
case 3923:
case 1828:
case 309:
case 3916:
case 2393:
case 3879:
case 3736:
case 3486:
case 1796:
case 3656:
case 3287:
case 3296:
case 2582:
case 548:
case 4052:
case 619:
case 2851:
case 565:
case 2180:
case 2929:
case 3424:
case 1774:
case 2064:
case 1388:
case 1600:
case 437:
case 3186:
case 2237:
case 2095:
case 2786:
case 1801:
case 1383:
case 649:
case 3399:
case 2873:
case 1339:
case 940:
case 2797:
case 3197:
case 2961:
case 1137:
case 1724:
case 739:
case 1667:
case 1650:
case 1290:
case 2979:
case 1398:
case 2828:
case 3338:
case 4010:
case 3474:
case 3333:
case 2952:
case 3054:
case 629:
case 2823:
case 1393:
case 945:
case 2796:
case 2612:
case 3187:
case 2236:
case 3810:
case 1582:
case 2787:
case 665:
case 3389:
case 1851:
case 519:
case 648:
case 2314:
case 2628:
case 2956:
case 1014:
case 3537:
case 2875:
case 2792:
case 2616:
case 3192:
case 2232:
case 292:
case 1586:
case 2093:
case 2574:
case 2191:
case 685:
case 339:
case 1481:
case 133:
case 1911:
case 2812:
case 988:
case 3231:
case 2623:
case 3182:
case 1866:
case 1800:
case 297:
case 2782:
case 971:
case 1587:
case 553:
case 993:
case 2083:
case 2960:
case 3335:
case 800:
case 1395:
case 29:
case 596:
case 1642:
case 3781:
case 338:
case 1491:
case 2181:
case 680:
case 1344:
case 410:
case 1662:
case 989:
case 2530:
case 3089:
case 2014:
case 1956:
case 3912:
case 3482:
case 2597:
case 2132:
case 2847:
case 762:
case 3292:
case 1232:
case 192:
case 2385:
case 4007:
case 4056:
case 3354:
case 3033:
case 1093:
case 2651:
case 1574:
case 233:
case 382:
case 2731:
case 812:
case 2911:
case 709:
case 425:
case 3856:
case 3975:
case 3679:
case 767:
case 2866:
case 1782:
case 4060:
case 1678:
case 1083:
case 1906:
case 3661:
case 1957:
case 81:
case 2846:
case 3602:
case 19:
case 445:
case 76:
case 468:
case 3857:
case 3806:
case 2364:
case 3925:
case 3629:
case 1088:
case 1524:
case 580:
case 817:
case 708:
case 3840:
case 1485:
case 1655:
case 3086:
case 2195:
case 2948:
case 56:
case 2533:
case 1915:
case 1808:
case 264:
case 4015:
case 3104:
case 3514:
case 1295:
case 2670:
case 3235:
case 837:
case 912:
case 328:
case 3744:
case 1803:
case 2538:
case 1972:
case 1244:
case 2164:
case 3627:
case 3815:
case 3908:
case 2869:
case 2754:
case 3096:
case 1036:
case 2185:
case 3785:
case 785:
case 3435:
case 3822:
case 1909:
case 3087:
case 1285:
case 1605:
case 2849:
case 509:
case 3613:
case 1858:
case 3809:
case 1922:
case 3618:
case 123:
case 329:
case 3677:
case 3958:
case 917:
case 562:
case 213:
case 3331:
case 2821:
case 373:
case 1391:
case 2485:
case 2959:
case 4068:
case 3135:
case 905:
case 1948:
case 3454:
case 796:
case 3843:
case 66:
case 3593:
case 3684:
case 2808:
case 164:
case 3863:
case 1704:
case 94:
case 1968:
case 1670:
case 2037:
case 3382:
case 3971:
case 1963:
case 1080:
case 1144:
case 1871:
case 667:
case 278:
case 2381:
case 243:
case 318:
case 3848:
case 2244:
case 1634:
case 3583:
case 3694:
case 281:
case 1869:
case 893:
case 2036:
case 1185:
case 3392:
case 900:
case 1849:
case 2858:
case 3254:
case 609:
case 1599:
case 2444:
case 2922:
case 223:
case 3949:
case 927:
case 1090:
case 856:
case 854:
case 3969:
case 889:
case 3588:
case 279:
case 2464:
case 1113:
case 202:
case 3234:
case 1503:
case 1294:
case 3559:
case 3470:
case 2993:
case 3316:
case 1352:
case 2705:
case 3515:
case 1914:
case 2007:
case 861:
case 2194:
case 531:
case 2571:
case 1654:
case 895:
case 346:
case 672:
case 3814:
case 269:
case 2889:
case 3047:
case 1245:
case 2226:
case 3765:
case 1177:
case 3050:
case 1126:
case 2998:
case 2145:
case 3067:
case 3323:
case 1508:
case 240:
case 1011:
case 225:
case 1118:
case 2006:
case 2060:
case 2413:
case 326:
case 1284:
case 2521:
case 1341:
case 174:
case 1494:
case 207:
case 3119:
case 3509:
case 67:
case 324:
case 2939:
case 3420:
case 1302:
case 2040:
case 3317:
case 2635:
case 3000:
case 1465:
case 1127:
case 3522:
case 504:
case 245:
case 1329:
case 2549:
case 2569:
case 677:
case 506:
case 2988:
case 1445:
case 3898:
case 2294:
case 2503:
case 1993:
case 2914:
case 3120:
case 3685:
case 3012:
case 1007:
case 4093:
case 2720:
case 1194:
case 3419:
case 1571:
case 2484:
case 2734:
case 1213:
case 215:
case 169:
case 572:
case 2245:
case 1165:
case 1427:
case 1277:
case 1226:
case 721:
case 2177:
case 2126:
case 3726:
case 1145:
case 2265:
case 1833:
case 3893:
case 140:
case 2379:
case 3543:
case 125:
case 859:
case 1006:
case 3405:
case 1983:
case 2770:
case 884:
case 3888:
case 2604:
case 314:
case 1521:
case 3219:
case 2341:
case 274:
case 57:
case 2494:
case 276:
case 1184:
case 2553:
case 316:
case 2302:
case 3999:
case 2127:
case 2176:
case 3727:
case 4088:
case 1899:
case 2558:
case 3839:
case 3664:
case 120:
case 604:
case 1549:
case 168:
case 1569:
case 3644:
case 210:
case 577:
case 3883:
case 10:
case 1418:
case 1477:
case 1426:
case 1717:
case 958:
case 598:
case 2102:
case 1384:
case 3761:
case 1778:
case 3997:
case 4037:
case 2141:
case 1059:
case 334:
case 3741:
case 3278:
case 3003:
case 2874:
case 1015:
case 3217:
case 1682:
case 1202:
case 777:
case 3416:
case 1452:
case 3162:
case 1072:
case 2762:
case 3101:
case 3273:
case 3008:
case 230:
case 2129:
case 2742:
case 77:
case 478:
case 443:
case 2410:
case 3987:
case 1461:
case 2824:
case 3216:
case 984:
case 3320:
case 1402:
case 772:
case 3417:
case 3752:
case 1716:
case 2152:
case 3632:
case 521:
case 1441:
case 3996:
case 3779:
case 6:
case 1546:
case 2326:
case 2377:
case 1500:
case 479:
case 1022:
case 3058:
case 3151:
case 235:
case 1429:
case 3556:
case 3355:
case 698:
case 3071:
case 3178:
case 2778:
case 2241:
case 995:
case 555:
case 2261:
case 1141:
case 2059:
case 1874:
case 464:
case 2202:
case 706:
case 2452:
case 2886:
case 2072:
case 3974:
case 2229:
case 4080:
case 2773:
case 3173:
case 3681:
case 2897:
case 1410:
case 3262:
case 550:
case 357:
case 990:
case 2461:
case 2394:
case 2009:
case 1824:
case 2252:
case 2402:
case 3890:
case 3506:
case 2716:
case 2692:
case 3560:
case 3021:
case 2441:
case 2728:
case 2936:
case 621:
case 4090:
case 3069:
case 3123:
case 1179:
case 3462:
case 1326:
case 5:
case 1525:
case 2887:
case 413:
case 731:
case 2110:
case 3442:
case 2279:
case 3691:
case 1990:
case 3049:
case 2429:
case 3930:
case 1681:
case 1201:
case 688:
case 3129:
case 3742:
case 4074:
case 3575:
case 71:
case 2837:
case 985:
case 1974:
case 3762:
case 2101:
case 2008:
case 2423:
case 3701:
case 3043:
case 330:
case 537:
case 152:
case 3048:
case 2278:
case 2741:
case 234:
case 717:
case 2370:
case 808:
case 2416:
case 1507:
case 1355:
case 3512:
case 1556:
case 1880:
case 3102:
case 86:
case 1117:
case 1071:
case 2761:
case 53:
case 236:
case 2997:
case 1319:
case 980:
case 419:
case 1691:
case 2058:
case 3631:
case 2151:
case 2223:
case 689:
case 2473:
case 3751:
case 1930:
case 1401:
case 2779:
case 656:
case 4030:
case 1123:
case 4024:
case 3210:
case 3377:
case 3525:
case 2836:
case 3326:
case 1305:
case 1557:
case 1560:
case 3152:
case 1116:
case 1021:
case 1128:
case 2996:
case 157:
case 2478:
case 3824:
case 2334:
case 693:
case 712:
case 2320:
case 1890:
case 1729:
case 2451:
case 700:
case 449:
case 1142:
case 2262:
case 428:
case 3550:
case 1101:
case 637:
case 1008:
case 1273:
case 1511:
case 3479:
case 252:
case 3261:
case 1986:
case 1741:
case 134:
case 3059:
case 3682:
case 3015:
case 3202:
case 1370:
case 3452:
case 1416:
case 727:
case 3384:
case 136:
case 63:
case 3778:
case 2319:
case 4086:
case 3887:
case 3500:
case 2710:
case 3566:
case 1058:
case 3279:
case 554:
case 589:
case 1473:
case 2401:
case 2251:
case 996:
case 2462:
case 3546:
case 1836:
case 2305:
case 2557:
case 3692:
case 2116:
case 3441:
case 2128:
case 1996:
case 4087:
case 1987:
case 3461:
case 3009:
case 1334:
case 2540:
case 1320:
case 953:
case 2745:
case 1726:
case 1777:
case 3145:
case 2572:
case 1718:
case 340:
case 522:
case 1543:
case 325:
case 3218:
case 369:
case 2814:
case 1563:
case 612:
case 1351:
case 4038:
case 3310:
case 3427:
case 1075:
case 2765:
case 1120:
case 3007:
case 1205:
case 3571:
case 3213:
case 505:
case 2234:
case 1898:
case 1713:
case 2328:
case 3705:
case 1933:
case 756:
case 1644:
case 170:
case 894:
case 3418:
case 3477:
case 3276:
case 1362:
case 3227:
case 2000:
case 1776:
case 1727:
case 2522:
case 2066:
case 896:
case 1839:
case 1664:
case 61:
case 2119:
case 2784:
case 500:
case 3719:
case 2509:
case 224:
case 2420:
case 3755:
case 48:
case 788:
case 3635:
case 1170:
case 3057:
case 1255:
case 3006:
case 52:
case 3521:
case 2777:
case 1067:
case 3265:
case 3508:
case 622:
case 2893:
case 647:
case 3011:
case 2543:
case 3118:
case 263:
case 1814:
case 512:
case 2563:
case 275:
case 1047:
case 2075:
case 967:
case 2012:
case 908:
case 2989:
case 2568:
case 3484:
case 1794:
case 3113:
case 2548:
case 1234:
case 2898:
case 1559:
case 3294:
case 3503:
case 1470:
case 3352:
case 2933:
case 96:
case 1316:
case 1105:
case 1220:
case 310:
case 517:
case 270:
case 351:
case 2301:
case 2883:
case 2362:
case 880:
case 3465:
case 438:
case 3127:
case 2776:
case 1066:
case 1373:
case 627:
case 3558:
case 2839:
case 642:
case 2664:
case 3494:
case 3361:
case 600:
case 124:
case 51:
case 3302:
case 1155:
case 909:
case 2170:
case 737:
case 214:
case 2888:
case 3604:
case 3284:
case 374:
case 62:
case 1848:
case 118:
case 2627:
case 2676:
case 2908:
case 972:
case 3963:
case 228:
case 2744:
case 2104:
case 364:
case 2097:
case 2235:
case 1971:
case 2795:
case 4071:
case 2903:
case 898:
case 1454:
case 1204:
case 366:
case 1665:
case 119:
case 273:
case 3821:
case 2331:
case 229:
case 2677:
case 1030:
case 2958:
case 2953:
case 1392:
case 4021:
case 2087:
case 3849:
case 2613:
case 1404:
case 1539:
case 1254:
case 1583:
case 899:
case 3754:
case 3869:
case 457:
case 3185:
case 2435:
case 1921:
case 1859:
case 1764:
case 3803:
case 2074:
case 2848:
case 3244:
case 1815:
case 4008:
case 2868:
case 128:
case 1744:
case 1104:
case 1097:
case 3037:
case 931:
case 4003:
case 2971:
case 436:
case 1795:
case 3959:
case 3735:
case 3655:
case 2593:
case 2684:
case 4058:
case 2665:
case 761:
case 219:
case 165:
case 173:
case 1331:
case 3464:
case 379:
case 2588:
case 795:
case 3922:
case 1809:
case 2024:
case 1618:
case 8:
case 2949:
case 2645:
case 401:
case 1953:
case 1087:
case 3858:
case 2583:
case 1154:
case 2694:
case 3036:
case 811:
case 4053:
case 2921:
case 1580:
case 3812:
case 1807:
case 1975:
case 1679:
case 3623:
case 2231:
case 3098:
case 3574:
case 1131:
case 239:
case 2950:
case 182:
case 463:
case 475:
case 2610:
case 1292:
case 831:
case 392:
case 595:
case 2811:
case 4012:
case 1033:
case 1354:
case 1089:
case 658:
case 1912:
case 3792:
case 2537:
case 1482:
case 187:
case 4025:
case 3530:
case 806:
case 1840:
case 1857:
case 1925:
case 1629:
case 3678:
case 3083:
case 18:
case 2536:
case 3617:
case 2182:
case 414:
case 3782:
case 397:
case 3432:
case 1492:
case 950:
case 684:
case 659:
case 3039:
case 2856:
case 4050:
case 4067:
case 2679:
case 1947:
case 1967:
case 2038:
case 139:
case 1950:
case 3731:
case 282:
case 333:
case 2292:
case 3867:
case 446:
case 3385:
case 3586:
case 2354:
case 2089:
case 998:
case 2912:
case 558:
case 444:
case 2482:
case 2732:
case 1900:
case 983:
case 3662:
case 2860:
case 138:
case 1431:
case 1781:
case 3364:
case 3491:
case 586:
case 28:
case 3846:
case 2282:
case 426:
case 3866:
case 999:
case 2641:
case 559:
case 2099:
case 2304:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748325602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,];
var gg_b = "1748325602/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
