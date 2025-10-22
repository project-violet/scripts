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
var o = 1;
switch (g) {
case 747:
case 243:
case 629:
case 258:
case 3063:
case 535:
case 1396:
case 3202:
case 3816:
case 1672:
case 3234:
case 664:
case 798:
case 1035:
case 3422:
case 2890:
case 2615:
case 949:
case 3243:
case 1804:
case 1832:
case 14:
case 2537:
case 3693:
case 1810:
case 3264:
case 2449:
case 246:
case 2780:
case 3390:
case 1478:
case 1862:
case 1489:
case 3044:
case 1656:
case 2316:
case 3628:
case 2567:
case 2169:
case 1740:
case 524:
case 4075:
case 1065:
case 1979:
case 1941:
case 2285:
case 2201:
case 1929:
case 3495:
case 1361:
case 4025:
case 1514:
case 1757:
case 137:
case 1208:
case 436:
case 1428:
case 2905:
case 170:
case 2421:
case 3297:
case 433:
case 2759:
case 3954:
case 2338:
case 301:
case 882:
case 2927:
case 2114:
case 1331:
case 3868:
case 1622:
case 36:
case 3219:
case 4007:
case 1500:
case 1450:
case 476:
case 2975:
case 1289:
case 2170:
case 1357:
case 177:
case 3144:
case 55:
case 2768:
case 2617:
case 544:
case 2535:
case 1960:
case 1165:
case 2485:
case 4048:
case 1761:
case 851:
case 2249:
case 226:
case 2699:
case 108:
case 2565:
case 3966:
case 929:
case 1570:
case 2992:
case 2039:
case 12:
case 2738:
case 1619:
case 4077:
case 223:
case 727:
case 513:
case 649:
case 1824:
case 3163:
case 3434:
case 3552:
case 1247:
case 2907:
case 1796:
case 880:
case 575:
case 1250:
case 3497:
case 2158:
case 2683:
case 1520:
case 755:
case 3918:
case 3346:
case 1151:
case 1755:
case 3991:
case 3753:
case 2000:
case 3790:
case 3256:
case 2380:
case 1886:
case 2213:
case 1408:
case 3645:
case 2120:
case 3526:
case 172:
case 3722:
case 3446:
case 593:
case 979:
case 1231:
case 423:
case 2787:
case 17:
case 3166:
case 2560:
case 1130:
case 273:
case 3319:
case 1935:
case 2077:
case 1575:
case 1747:
case 360:
case 1308:
case 127:
case 1789:
case 2268:
case 1112:
case 2081:
case 1440:
case 1261:
case 2819:
case 3944:
case 404:
case 1592:
case 2624:
case 2897:
case 2749:
case 1965:
case 988:
case 899:
case 276:
case 1160:
case 3136:
case 3657:
case 72:
case 4069:
case 1041:
case 2843:
case 3253:
case 155:
case 3756:
case 140:
case 3290:
case 3511:
case 2721:
case 2125:
case 2920:
case 3640:
case 534:
case 3191:
case 2005:
case 3795:
case 2713:
case 3523:
case 1109:
case 122:
case 2802:
case 2834:
case 3302:
case 2958:
case 3334:
case 4014:
case 1646:
case 495:
case 2027:
case 1793:
case 525:
case 215:
case 772:
case 3:
case 2459:
case 2864:
case 1255:
case 3772:
case 3343:
case 414:
case 2321:
case 3764:
case 2075:
case 2148:
case 1937:
case 2872:
case 4070:
case 1060:
case 362:
case 1179:
case 1577:
case 74:
case 2313:
case 1188:
case 1690:
case 446:
case 2468:
case 1653:
case 2604:
case 1012:
case 2632:
case 574:
case 3395:
case 1461:
case 679:
case 2610:
case 1030:
case 1350:
case 3655:
case 3734:
case 3702:
case 2092:
case 2939:
case 2662:
case 2856:
case 1431:
case 2588:
case 458:
case 3821:
case 3849:
case 3871:
case 2387:
case 386:
case 3182:
case 3154:
case 737:
case 3018:
case 1496:
case 550:
case 383:
case 2900:
case 2105:
case 1009:
case 2416:
case 142:
case 3542:
case 1129:
case 236:
case 367:
case 4020:
case 965:
case 2025:
case 3887:
case 2371:
case 1800:
case 1046:
case 3735:
case 3131:
case 3682:
case 4083:
case 2273:
case 2627:
case 3568:
case 3947:
case 1922:
case 3230:
case 2306:
case 636:
case 1763:
case 2086:
case 3488:
case 3538:
case 2074:
case 3806:
case 3978:
case 915:
case 3161:
case 2752:
case 2605:
case 3989:
case 2784:
case 3394:
case 3260:
case 605:
case 1236:
case 1153:
case 1688:
case 1190:
case 1995:
case 2104:
case 2648:
case 3928:
case 599:
case 2024:
case 3057:
case 1641:
case 429:
case 3337:
case 2837:
case 2211:
case 1869:
case 1482:
case 857:
case 1532:
case 2553:
case 893:
case 1972:
case 2223:
case 2726:
case 2110:
case 171:
case 3367:
case 2442:
case 3993:
case 3751:
case 3155:
case 3950:
case 3826:
case 1858:
case 3691:
case 378:
case 3279:
case 1609:
case 2851:
case 3288:
case 1964:
case 2625:
case 3412:
case 3945:
case 3061:
case 1466:
case 2607:
case 1820:
case 850:
case 389:
case 2983:
case 1574:
case 1146:
case 1934:
case 1902:
case 2376:
case 2423:
case 2242:
case 3852:
case 3335:
case 2411:
case 1282:
case 1254:
case 2203:
case 1418:
case 676:
case 3096:
case 2917:
case 1491:
case 3365:
case 2675:
case 2498:
case 1344:
case 3636:
case 3229:
case 1053:
case 741:
case 2835:
case 1333:
case 58:
case 3908:
case 2352:
case 2999:
case 2004:
case 3794:
case 2032:
case 2384:
case 1318:
case 361:
case 2658:
case 1463:
case 2564:
case 2311:
case 1134:
case 1651:
case 2809:
case 2986:
case 2323:
case 2534:
case 2452:
case 2484:
case 3940:
case 2620:
case 2974:
case 328:
case 731:
case 1433:
case 3089:
case 2398:
case 3309:
case 3811:
case 3237:
case 185:
case 695:
case 1391:
case 2543:
case 943:
case 1095:
case 390:
case 4032:
case 2199:
case 2597:
case 3633:
case 3360:
case 3028:
case 3729:
case 1336:
case 2924:
case 509:
case 824:
case 3644:
case 623:
case 3873:
case 3957:
case 3294:
case 869:
case 1599:
case 3663:
case 2373:
case 141:
case 3501:
case 835:
case 3451:
case 4062:
case 1072:
case 803:
case 1635:
case 587:
case 914:
case 1366:
case 3330:
case 2703:
case 1119:
case 4010:
case 2812:
case 2206:
case 3050:
case 1244:
case 3712:
case 2522:
case 1827:
case 3803:
case 1064:
case 4074:
case 2284:
case 353:
case 3760:
case 3178:
case 875:
case 580:
case 1043:
case 2276:
case 31:
case 2773:
case 3467:
case 2303:
case 2083:
case 1766:
case 1263:
case 3931:
case 2614:
case 1002:
case 1382:
case 1034:
case 3549:
case 3147:
case 3521:
case 2888:
case 904:
case 1718:
case 1019:
case 2406:
case 2556:
case 3513:
case 121:
case 3251:
case 926:
case 1172:
case 813:
case 614:
case 3128:
case 2669:
case 658:
case 519:
case 643:
case 844:
case 3341:
case 1515:
case 3494:
case 923:
case 1990:
case 2099:
case 3388:
case 3008:
case 2798:
case 784:
case 2904:
case 551:
case 750:
case 410:
case 1420:
case 745:
case 1013:
case 2633:
case 537:
case 290:
case 1866:
case 3830:
case 1684:
case 3670:
case 3924:
case 2028:
case 2729:
case 3519:
case 3117:
case 2501:
case 3373:
case 3742:
case 2663:
case 1458:
case 1508:
case 3812:
case 1676:
case 2050:
case 2330:
case 2093:
case 3015:
case 2898:
case 4031:
case 841:
case 1777:
case 1626:
case 261:
case 3183:
case 1239:
case 54:
case 20:
case 2267:
case 554:
case 781:
case 518:
case 2741:
case 2779:
case 2078:
case 2940:
case 3974:
case 3620:
case 106:
case 1325:
case 3484:
case 2823:
case 3502:
case 3534:
case 1980:
case 1185:
case 1818:
case 1781:
case 532:
case 2811:
case 478:
case 3398:
case 611:
case 2089:
case 2309:
case 2788:
case 2955:
case 3556:
case 1528:
case 3888:
case 3910:
case 3595:
case 2996:
case 2251:
case 3226:
case 3962:
case 3723:
case 1707:
case 1258:
case 2513:
case 364:
case 1916:
case 292:
case 1121:
case 1400:
case 412:
case 329:
case 752:
case 1550:
case 4057:
case 1593:
case 3017:
case 438:
case 725:
case 400:
case 1220:
case 572:
case 2008:
case 3798:
case 1085:
case 1305:
case 144:
case 2265:
case 15:
case 1882:
case 1469:
case 2189:
case 508:
case 2178:
case 2961:
case 2045:
case 1171:
case 911:
case 868:
case 52:
case 1439:
case 3342:
case 2467:
case 1187:
case 1589:
case 3829:
case 49:
case 2571:
case 2147:
case 1792:
case 2931:
case 2730:
case 3303:
case 256:
case 1225:
case 3132:
case 3867:
case 238:
case 540:
case 775:
case 2337:
case 1369:
case 2057:
case 492:
case 134:
case 2928:
case 3162:
case 3837:
case 960:
case 2516:
case 3110:
case 3442:
case 2367:
case 1059:
case 1207:
case 3677:
case 1758:
case 1603:
case 3627:
case 3273:
case 2568:
case 2947:
case 716:
case 157:
case 3894:
case 2131:
case 2682:
case 683:
case 193:
case 29:
case 744:
case 1292:
case 41:
case 3306:
case 1477:
case 75:
case 667:
case 2161:
case 196:
case 2806:
case 497:
case 2765:
case 3074:
case 991:
case 2538:
case 448:
case 1168:
case 453:
case 2488:
case 527:
case 217:
case 2479:
case 2441:
case 2260:
case 1448:
case 2394:
case 3752:
case 3605:
case 1275:
case 1714:
case 3692:
case 1833:
case 53:
case 2666:
case 4050:
case 1557:
case 4093:
case 145:
case 3706:
case 2096:
case 1227:
case 3203:
case 831:
case 3411:
case 542:
case 1016:
case 2636:
case 3498:
case 2157:
case 3675:
case 3124:
case 3917:
case 1863:
case 2876:
case 2794:
case 490:
case 3004:
case 1425:
case 3384:
case 2908:
case 3999:
case 3835:
case 520:
case 2229:
case 1985:
case 1180:
case 4089:
case 2460:
case 2691:
case 2826:
case 691:
case 2061:
case 598:
case 2412:
case 3625:
case 3546:
case 1281:
case 174:
case 2288:
case 547:
case 703:
case 1492:
case 40:
case 983:
case 2580:
case 1623:
case 769:
case 2430:
case 2767:
case 365:
case 1358:
case 461:
case 1611:
case 289:
case 1540:
case 2351:
case 3920:
case 1204:
case 827:
case 3674:
case 2364:
case 2511:
case 2756:
case 2290:
case 3843:
case 1198:
case 3713:
case 3385:
case 2191:
case 751:
case 2885:
case 1003:
case 678:
case 291:
case 1926:
case 1715:
case 2054:
case 87:
case 917:
case 2082:
case 3958:
case 2343:
case 1591:
case 3864:
case 2598:
case 3459:
case 3107:
case 1123:
case 3509:
case 3238:
case 602:
case 900:
case 3192:
case 1659:
case 2801:
case 3077:
case 3560:
case 1536:
case 373:
case 840:
case 3301:
case 1474:
case 3081:
case 1984:
case 1952:
case 260:
case 3480:
case 1566:
case 3530:
case 2136:
case 1317:
case 3749:
case 3771:
case 286:
case 1878:
case 2322:
case 617:
case 1410:
case 1142:
case 3259:
case 2871:
case 2797:
case 1638:
case 333:
case 1103:
case 2018:
case 1462:
case 2154:
case 2631:
case 907:
case 1098:
case 787:
case 1224:
case 3900:
case 3701:
case 2091:
case 3349:
case 2887:
case 1404:
case 18:
case 3822:
case 763:
case 2490:
case 898:
case 2503:
case 3280:
case 2356:
case 1616:
case 2036:
case 3148:
case 2764:
case 3321:
case 2395:
case 3785:
case 1274:
case 3604:
case 1850:
case 3632:
case 4033:
case 3468:
case 3313:
case 902:
case 2813:
case 2655:
case 2734:
case 83:
case 3541:
case 3610:
case 600:
case 3895:
case 1783:
case 2066:
case 638:
case 3438:
case 4063:
case 3588:
case 2696:
case 612:
case 2372:
case 910:
case 3662:
case 3856:
case 467:
case 3368:
case 1299:
case 1724:
case 1671:
case 3201:
case 818:
case 483:
case 4091:
case 3421:
case 109:
case 3100:
case 3905:
case 2689:
case 656:
case 2456:
case 1217:
case 1903:
case 3927:
case 3338:
case 1026:
case 541:
case 2297:
case 1106:
case 653:
case 2219:
case 1942:
case 1415:
case 187:
case 697:
case 486:
case 1362:
case 182:
case 2063:
case 358:
case 1786:
case 3139:
case 3537:
case 2693:
case 1076:
case 2650:
case 3853:
case 2746:
case 2422:
case 3780:
case 2390:
case 2033:
case 346:
case 3471:
case 837:
case 3449:
case 1304:
case 2264:
case 3285:
case 1621:
case 314:
case 870:
case 2628:
case 3316:
case 3567:
case 259:
case 799:
case 3907:
case 1923:
case 948:
case 3014:
case 953:
case 2880:
case 4082:
case 997:
case 3158:
case 1911:
case 91:
case 877:
case 1998:
case 119:
case 2256:
case 2991:
case 2753:
case 1417:
case 2645:
case 3716:
case 3925:
case 2526:
case 568:
case 3213:
case 830:
case 1374:
case 956:
case 1324:
case 2936:
case 3617:
case 3170:
case 2576:
case 3975:
case 2133:
case 2608:
case 1601:
case 2859:
case 3271:
case 1184:
case 1152:
case 3039:
case 992:
case 3738:
case 3287:
case 1544:
case 2222:
case 2966:
case 3565:
case 690:
case 1857:
case 2434:
case 2163:
case 1416:
case 3799:
case 2389:
case 2257:
case 3098:
case 3847:
case 2378:
case 1822:
case 220:
case 136:
case 437:
case 2527:
case 3717:
case 3554:
case 3432:
case 3404:
case 1349:
case 1371:
case 38:
case 3142:
case 23:
case 3410:
case 3023:
case 1387:
case 3906:
case 2347:
case 3462:
case 3011:
case 2496:
case 105:
case 1529:
case 3103:
case 133:
case 3286:
case 1541:
case 44:
case 2030:
case 886:
case 1939:
case 2967:
case 1092:
case 714:
case 454:
case 2431:
case 1856:
case 2581:
case 1662:
case 1438:
case 1588:
case 746:
case 1148:
case 4065:
case 1321:
case 2179:
case 684:
case 2328:
case 758:
case 418:
case 507:
case 2690:
case 1785:
case 3893:
case 2461:
case 2240:
case 1604:
case 867:
case 2012:
case 2646:
case 3715:
case 2525:
case 1958:
case 2296:
case 3383:
case 2793:
case 3003:
case 3042:
case 3210:
case 1864:
case 3123:
case 1107:
case 1509:
case 3591:
case 500:
case 472:
case 2728:
case 3518:
case 1674:
case 1125:
case 1920:
case 3204:
case 795:
case 399:
case 4094:
case 1005:
case 2883:
case 3424:
case 2507:
case 2109:
case 3198:
case 2457:
case 1268:
case 430:
case 408:
case 517:
case 2308:
case 227:
case 723:
case 3399:
case 2088:
case 984:
case 1081:
case 2440:
case 3474:
case 1301:
case 1749:
case 1048:
case 1480:
case 2778:
case 3317:
case 1530:
case 2965:
case 3566:
case 2160:
case 2817:
case 1512:
case 3173:
case 1077:
case 4067:
case 3659:
case 3536:
case 2130:
case 173:
case 1560:
case 59:
case 3808:
case 1192:
case 704:
case 1846:
case 1000:
case 319:
case 592:
case 3704:
case 2664:
case 2886:
case 2340:
case 1551:
case 3374:
case 1120:
case 1716:
case 3499:
case 2558:
case 2643:
case 1907:
case 3840:
case 3386:
case 2796:
case 3006:
case 2874:
case 3710:
case 3126:
case 3911:
case 1158:
case 195:
case 2755:
case 2634:
case 685:
case 2151:
case 1565:
case 380:
case 2930:
case 1738:
case 51:
case 3544:
case 2570:
case 3176:
case 47:
case 2697:
case 2824:
case 123:
case 3973:
case 3857:
case 2247:
case 968:
case 4079:
case 4041:
case 1617:
case 1069:
case 2037:
case 1768:
case 773:
case 1170:
case 277:
case 3324:
case 104:
case 3184:
case 921:
case 3601:
case 597:
case 2278:
case 1699:
case 3563:
case 548:
case 208:
case 2912:
case 427:
case 553:
case 2445:
case 3026:
case 1058:
case 1114:
case 2051:
case 3903:
case 3415:
case 387:
case 3942:
case 3106:
case 3724:
case 590:
case 2361:
case 2514:
case 2929:
case 3649:
case 3671:
case 366:
case 1368:
case 1020:
case 733:
case 237:
case 2208:
case 442:
case 309:
case 270:
case 4009:
case 3217:
case 2428:
case 2194:
case 1421:
case 3084:
case 3052:
case 2988:
case 2695:
case 2478:
case 528:
case 218:
case 146:
case 447:
case 3855:
case 1981:
case 1948:
case 1169:
case 1316:
case 2539:
case 2137:
case 2489:
case 1070:
case 114:
case 2396:
case 561:
case 143:
case 382:
case 2672:
case 801:
case 2355:
case 1977:
case 1890:
case 1615:
case 254:
case 2167:
case 668:
case 3310:
case 4030:
case 2832:
case 1487:
case 2804:
case 3550:
case 129:
case 3400:
case 1017:
case 2515:
case 3725:
case 3348:
case 164:
case 3121:
case 2990:
case 3381:
case 2877:
case 2791:
case 2953:
case 1932:
case 1798:
case 64:
case 1910:
case 1888:
case 1711:
case 81:
case 977:
case 375:
case 2881:
case 2718:
case 511:
case 1226:
case 484:
case 632:
case 3258:
case 2848:
case 3707:
case 930:
case 3414:
case 856:
case 2172:
case 1595:
case 1879:
case 2043:
case 1829:
case 2122:
case 1773:
case 3439:
case 637:
case 3606:
case 1276:
case 2263:
case 670:
case 3327:
case 1303:
case 313:
case 3938:
case 972:
case 2382:
case 1614:
case 3792:
case 3469:
case 35:
case 2244:
case 3305:
case 2827:
case 3085:
case 1522:
case 2694:
case 1284:
case 3171:
case 1252:
case 3775:
case 2064:
case 316:
case 2736:
case 2875:
case 1373:
case 2599:
case 2197:
case 3214:
case 861:
case 918:
case 1015:
case 2635:
case 3392:
case 80:
case 3959:
case 3676:
case 1812:
case 1206:
case 1703:
case 2119:
case 2517:
case 56:
case 3652:
case 1830:
case 3705:
case 3684:
case 828:
case 3101:
case 4090:
case 2892:
case 62:
case 4053:
case 1199:
case 2056:
case 3200:
case 1924:
case 1484:
case 3071:
case 3049:
case 1452:
case 2433:
case 765:
case 2583:
case 3269:
case 2444:
case 369:
case 1543:
case 3818:
case 3185:
case 285:
case 324:
case 335:
case 3777:
case 2463:
case 2318:
case 1183:
case 3626:
case 303:
case 2946:
case 937:
case 2134:
case 1311:
case 1986:
case 2022:
case 739:
case 3239:
case 3307:
case 1323:
case 1476:
case 2825:
case 1124:
case 1675:
case 583:
case 2491:
case 3863:
case 878:
case 1917:
case 4056:
case 2660:
case 3370:
case 1498:
case 1835:
case 2053:
case 3901:
case 3425:
case 2612:
case 807:
case 1352:
case 1999:
case 2630:
case 627:
case 1010:
case 3407:
case 1423:
case 1376:
case 2524:
case 3714:
case 2919:
case 2254:
case 3844:
case 2870:
case 1062:
case 947:
case 1411:
case 1865:
case 998:
case 441:
case 889:
case 2418:
case 3673:
case 1607:
case 3623:
case 1186:
case 2943:
case 640:
case 942:
case 3492:
case 2820:
case 920:
case 3540:
case 1983:
case 231:
case 3739:
case 1473:
case 622:
case 2934:
case 165:
case 2858:
case 93:
case 381:
case 485:
case 2586:
case 3985:
case 139:
case 2436:
case 562:
case 3068:
case 3769:
case 374:
case 2532:
case 591:
case 2869:
case 2482:
case 1211:
case 421:
case 325:
case 284:
case 1553:
case 3427:
case 1915:
case 1110:
case 1677:
case 1223:
case 3059:
case 5:
case 89:
case 179:
case 2995:
case 2153:
case 468:
case 1132:
case 1104:
case 3225:
case 3913:
case 2839:
case 1024:
case 334:
case 3369:
case 2510:
case 2641:
case 3921:
case 3949:
case 2629:
case 560:
case 3770:
case 1074:
case 4064:
case 3448:
case 3275:
case 1752:
case 3300:
case 955:
case 3603:
case 1894:
case 2763:
case 1306:
case 3642:
case 4043:
case 922:
case 3987:
case 3820:
case 2492:
case 4087:
case 3466:
case 1580:
case 3902:
case 3934:
case 403:
case 728:
case 2739:
case 1618:
case 1767:
case 2038:
case 2540:
case 3146:
case 699:
case 189:
case 1031:
case 2611:
case 3436:
case 594:
case 1460:
case 1241:
case 1279:
case 2698:
case 281:
case 2475:
case 424:
case 3858:
case 2281:
case 274:
case 1945:
case 4049:
case 4071:
case 406:
case 3964:
case 2068:
case 1737:
case 1157:
case 2370:
case 1559:
case 1636:
case 1365:
case 4021:
case 839:
case 3491:
case 2863:
case 2205:
case 1908:
case 3612:
case 1794:
case 536:
case 2901:
case 1229:
case 2700:
case 2833:
case 2714:
case 2407:
case 2557:
case 1852:
case 1666:
case 3418:
case 533:
case 250:
case 1096:
case 3363:
case 3282:
case 3997:
case 2844:
case 3870:
case 2481:
case 296:
case 879:
case 1212:
case 2531:
case 117:
case 1488:
case 3744:
case 3629:
case 71:
case 2080:
case 3733:
case 45:
case 1989:
case 2275:
case 444:
case 4085:
case 257:
case 413:
case 748:
case 2138:
case 797:
case 3800:
case 1131:
case 1682:
case 2292:
case 2987:
case 68:
case 1230:
case 573:
case 3266:
case 3922:
case 999:
case 3218:
case 384:
case 225:
case 3482:
case 3532:
case 3504:
case 475:
case 252:
case 2913:
case 4001:
case 2225:
case 3562:
case 3153:
case 3995:
case 2596:
case 3190:
case 138:
case 3679:
case 1209:
case 2369:
case 2720:
case 1337:
case 112:
case 2116:
case 3291:
case 1928:
case 234:
case 2439:
case 3043:
case 919:
case 3034:
case 3382:
case 3002:
case 2792:
case 3354:
case 2938:
case 1549:
case 1147:
case 3805:
case 609:
case 717:
case 3263:
case 829:
case 1712:
case 1265:
case 2305:
case 3827:
case 2085:
case 79:
case 3244:
case 1189:
case 2882:
case 4080:
case 526:
case 1760:
case 1842:
case 687:
case 496:
case 3064:
case 2171:
case 2149:
case 2547:
case 2968:
case 2121:
case 2916:
case 682:
case 2725:
case 1494:
case 192:
case 2348:
case 2593:
case 1128:
case 3637:
case 1379:
case 1341:
case 3156:
case 368:
case 2113:
case 1388:
case 1709:
case 2220:
case 2381:
case 2001:
case 3791:
case 3953:
case 3195:
case 3019:
case 3667:
case 2528:
case 1955:
case 3881:
case 2377:
case 1150:
case 1521:
case 1251:
case 595:
case 3172:
case 1996:
case 2414:
case 2707:
case 1513:
case 2258:
case 700:
case 425:
case 3583:
case 206:
case 1145:
case 1940:
case 3433:
case 789:
case 474:
case 3807:
case 1823:
case 2748:
case 963:
case 2049:
case 2071:
case 1465:
case 3391:
case 224:
case 2781:
case 385:
case 514:
case 2818:
case 2185:
case 1309:
case 269:
case 1089:
case 2269:
case 1237:
case 1811:
case 3102:
case 966:
case 3651:
case 1047:
case 3318:
case 619:
case 161:
case 203:
case 3946:
case 543:
case 707:
case 2545:
case 235:
case 2777:
case 558:
case 2307:
case 3825:
case 778:
case 10:
case 3022:
case 1435:
case 1585:
case 909:
case 1501:
case 2214:
case 3072:
case 2508:
case 1663:
case 341:
case 450:
case 3119:
case 3517:
case 1330:
case 1093:
case 2392:
case 3635:
case 1633:
case 2013:
case 3892:
case 2684:
case 2866:
case 2705:
case 2375:
case 1957:
case 1729:
case 3336:
case 1644:
case 4016:
case 3570:
case 32:
case 1222:
case 3930:
case 1443:
case 2973:
case 1584:
case 2857:
case 3824:
case 760:
case 3697:
case 1163:
case 3165:
case 3960:
case 1936:
case 3761:
case 975:
case 1576:
case 3357:
case 3037:
case 3912:
case 3445:
case 3278:
case 330:
case 308:
case 2563:
case 2184:
case 2601:
case 499:
case 3094:
case 2704:
case 2732:
case 7:
case 635:
case 2417:
case 3228:
case 804:
case 603:
case 219:
case 3408:
case 2499:
case 1526:
case 372:
case 3340:
case 2374:
case 791:
case 944:
case 3250:
case 2386:
case 4042:
case 2840:
case 606:
case 3874:
case 3643:
case 2215:
case 1880:
case 1346:
case 916:
case 3755:
case 3634:
case 3602:
case 2911:
case 4003:
case 3520:
case 669:
case 675:
case 3245:
case 1390:
case 2052:
case 3988:
case 1264:
case 3810:
case 2774:
case 3065:
case 3740:
case 2621:
case 3941:
case 3979:
case 3539:
case 332:
case 1816:
case 1202:
case 3447:
case 3396:
case 1063:
case 4073:
case 2786:
case 762:
case 1650:
case 3804:
case 1746:
case 354:
case 3035:
case 3355:
case 858:
case 3051:
case 906:
case 2903:
case 644:
case 3331:
case 1472:
case 1982:
case 1297:
case 2026:
case 767:
case 1219:
case 924:
case 2687:
case 616:
case 3500:
case 1868:
case 3622:
case 2671:
case 2649:
case 903:
case 846:
case 935:
case 3361:
case 1495:
case 2724:
case 1838:
case 2831:
case 2217:
case 1456:
case 370:
case 209:
case 549:
case 1689:
case 1655:
case 3548:
case 3393:
case 3030:
case 4076:
case 2783:
case 2286:
case 3350:
case 1696:
case 565:
case 482:
case 833:
case 1743:
case 2828:
case 625:
case 3060:
case 162:
case 3141:
case 3577:
case 539:
case 3937:
case 2850:
case 4052:
case 3012:
case 2893:
case 950:
case 347:
case 3815:
case 3009:
case 2799:
case 3708:
case 3257:
case 1542:
case 3994:
case 1091:
case 2224:
case 894:
case 2582:
case 28:
case 1661:
case 2554:
case 2432:
case 1887:
case 2404:
case 1453:
case 2717:
case 1503:
case 3527:
case 1490:
case 167:
case 2878:
case 1322:
case 186:
case 2906:
case 981:
case 1797:
case 2023:
case 1849:
case 2142:
case 2410:
case 33:
case 974:
case 1018:
case 2638:
case 4026:
case 1631:
case 1182:
case 2462:
case 3440:
case 1933:
case 3261:
case 3789:
case 3088:
case 2399:
case 2984:
case 1573:
case 645:
case 3160:
case 650:
case 3041:
case 3079:
case 1657:
case 3592:
case 952:
case 1397:
case 2173:
case 1446:
case 1722:
case 3231:
case 2976:
case 3575:
case 3747:
case 2808:
case 3935:
case 3130:
case 1801:
case 2003:
case 3793:
case 3750:
case 1334:
case 1054:
case 3646:
case 3525:
case 681:
case 2591:
case 1772:
case 674:
case 2845:
case 1598:
case 1:
case 2042:
case 2210:
case 957:
case 1364:
case 1511:
case 1640:
case 2204:
case 1253:
case 3728:
case 3345:
case 3029:
case 3507:
case 3109:
case 3457:
case 1191:
case 3883:
case 1795:
case 299:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761127201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,];
var gg_b = "1761127201/";

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
