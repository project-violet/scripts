// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 175:
case 2998:
case 2773:
case 345:
case 1862:
case 3171:
case 4037:
case 2437:
case 1807:
case 2295:
case 3511:
case 3880:
case 3041:
case 2163:
case 621:
case 3101:
case 206:
case 3656:
case 3571:
case 223:
case 686:
case 903:
case 1486:
case 416:
case 1006:
case 3471:
case 1587:
case 1814:
case 501:
case 1879:
case 1142:
case 1150:
case 1708:
case 2641:
case 231:
case 3433:
case 3995:
case 3689:
case 1034:
case 3183:
case 2905:
case 3895:
case 3632:
case 3845:
case 1291:
case 329:
case 2644:
case 3368:
case 418:
case 2140:
case 3079:
case 2347:
case 2153:
case 584:
case 3308:
case 1561:
case 3826:
case 1453:
case 3889:
case 1195:
case 3873:
case 1356:
case 1916:
case 2774:
case 3238:
case 2521:
case 3990:
case 1041:
case 3054:
case 511:
case 1465:
case 196:
case 3994:
case 3161:
case 3215:
case 2018:
case 3558:
case 2403:
case 111:
case 1795:
case 21:
case 3407:
case 4004:
case 3345:
case 3123:
case 2780:
case 882:
case 1138:
case 1523:
case 2064:
case 2472:
case 97:
case 659:
case 1305:
case 78:
case 2610:
case 2662:
case 3002:
case 547:
case 348:
case 3024:
case 3757:
case 2650:
case 886:
case 3405:
case 980:
case 672:
case 1929:
case 1482:
case 4015:
case 1792:
case 1584:
case 929:
case 177:
case 2000:
case 1206:
case 634:
case 1193:
case 3592:
case 3455:
case 2112:
case 2469:
case 1277:
case 1822:
case 1860:
case 2007:
case 2777:
case 2642:
case 2914:
case 1855:
case 1693:
case 2626:
case 3671:
case 401:
case 2488:
case 27:
case 1337:
case 2052:
case 2024:
case 3422:
case 2684:
case 2739:
case 1806:
case 2032:
case 3863:
case 2117:
case 626:
case 3568:
case 465:
case 1819:
case 3224:
case 1145:
case 3815:
case 12:
case 3100:
case 1544:
case 2115:
case 2729:
case 837:
case 1956:
case 4010:
case 220:
case 3353:
case 2239:
case 609:
case 859:
case 723:
case 614:
case 2969:
case 1775:
case 3596:
case 2258:
case 2376:
case 3350:
case 3530:
case 2272:
case 3502:
case 1194:
case 1857:
case 2388:
case 2898:
case 2478:
case 344:
case 1718:
case 3493:
case 1085:
case 2475:
case 2529:
case 1173:
case 1382:
case 2656:
case 3825:
case 480:
case 3391:
case 2661:
case 896:
case 3627:
case 3769:
case 3051:
case 1133:
case 273:
case 3770:
case 1728:
case 575:
case 322:
case 1474:
case 3505:
case 549:
case 2542:
case 1093:
case 640:
case 583:
case 120:
case 308:
case 1546:
case 3544:
case 3984:
case 2019:
case 2511:
case 1061:
case 1575:
case 4046:
case 885:
case 2819:
case 1147:
case 2514:
case 2252:
case 2341:
case 790:
case 2146:
case 3830:
case 3907:
case 460:
case 554:
case 1823:
case 2601:
case 503:
case 1965:
case 3357:
case 3302:
case 645:
case 490:
case 3342:
case 356:
case 1226:
case 3389:
case 4026:
case 1083:
case 558:
case 3831:
case 840:
case 2734:
case 1540:
case 3902:
case 3910:
case 3567:
case 2999:
case 1302:
case 3600:
case 1344:
case 1975:
case 2095:
case 1608:
case 3426:
case 3784:
case 130:
case 1379:
case 1472:
case 1366:
case 1550:
case 3111:
case 1520:
case 303:
case 2195:
case 3174:
case 1722:
case 166:
case 3501:
case 3953:
case 3188:
case 4068:
case 2800:
case 3958:
case 2870:
case 1200:
case 598:
case 2188:
case 2282:
case 3212:
case 707:
case 3448:
case 4009:
case 2:
case 1205:
case 1090:
case 1928:
case 3066:
case 865:
case 528:
case 148:
case 3458:
case 3329:
case 1225:
case 718:
case 2144:
case 2306:
case 3611:
case 425:
case 3187:
case 107:
case 2292:
case 841:
case 1966:
case 1132:
case 266:
case 405:
case 924:
case 839:
case 832:
case 1415:
case 58:
case 3413:
case 966:
case 1431:
case 1953:
case 477:
case 1543:
case 3404:
case 1564:
case 1505:
case 1921:
case 3424:
case 3668:
case 1801:
case 37:
case 2450:
case 1059:
case 1592:
case 2047:
case 642:
case 3420:
case 3670:
case 2741:
case 2323:
case 1355:
case 1434:
case 330:
case 2795:
case 298:
case 3115:
case 3360:
case 2551:
case 2314:
case 3304:
case 3515:
case 1778:
case 201:
case 464:
case 1044:
case 2389:
case 427:
case 2119:
case 844:
case 4088:
case 1665:
case 1577:
case 399:
case 1319:
case 2833:
case 3912:
case 1754:
case 1105:
case 2757:
case 1077:
case 2055:
case 2997:
case 1451:
case 945:
case 1517:
case 833:
case 129:
case 1922:
case 2587:
case 4032:
case 658:
case 2544:
case 3548:
case 2284:
case 3635:
case 717:
case 2482:
case 3289:
case 1626:
case 3033:
case 1515:
case 820:
case 1770:
case 2893:
case 487:
case 2296:
case 556:
case 3156:
case 2124:
case 17:
case 297:
case 2517:
case 3265:
case 3204:
case 3926:
case 1591:
case 2280:
case 3225:
case 1615:
case 157:
case 1563:
case 3074:
case 3507:
case 1026:
case 3209:
case 2874:
case 1312:
case 931:
case 2177:
case 608:
case 3354:
case 2159:
case 2387:
case 3841:
case 1876:
case 1828:
case 3798:
case 2614:
case 4061:
case 3708:
case 3180:
case 3321:
case 1664:
case 2631:
case 3366:
case 775:
case 1987:
case 2361:
case 2430:
case 638:
case 508:
case 1537:
case 733:
case 3015:
case 3440:
case 2694:
case 2843:
case 1038:
case 2297:
case 238:
case 2628:
case 3068:
case 2121:
case 2454:
case 2829:
case 2041:
case 3435:
case 172:
case 2113:
case 2592:
case 2377:
case 3722:
case 3191:
case 913:
case 3335:
case 3077:
case 2456:
case 2941:
case 1964:
case 851:
case 3437:
case 1365:
case 1713:
case 2371:
case 3343:
case 1573:
case 4:
case 210:
case 402:
case 2362:
case 1954:
case 806:
case 2704:
case 2798:
case 1293:
case 13:
case 446:
case 2771:
case 3540:
case 342:
case 1869:
case 3124:
case 3162:
case 2334:
case 2420:
case 2091:
case 2948:
case 2083:
case 2613:
case 3792:
case 3247:
case 2148:
case 415:
case 2339:
case 612:
case 3812:
case 684:
case 2256:
case 926:
case 2138:
case 2123:
case 1835:
case 1283:
case 1950:
case 2017:
case 1639:
case 719:
case 1613:
case 509:
case 1253:
case 3410:
case 2772:
case 3743:
case 1603:
case 3962:
case 2058:
case 2570:
case 1631:
case 1925:
case 2305:
case 746:
case 311:
case 2695:
case 1710:
case 3250:
case 1245:
case 1144:
case 1558:
case 98:
case 1755:
case 3585:
case 810:
case 3897:
case 3982:
case 1649:
case 527:
case 307:
case 1840:
case 1942:
case 1160:
case 1162:
case 3031:
case 1452:
case 253:
case 3346:
case 3330:
case 978:
case 2507:
case 2675:
case 3702:
case 2150:
case 3359:
case 3512:
case 1128:
case 3279:
case 4008:
case 1660:
case 2918:
case 455:
case 3773:
case 3961:
case 607:
case 2515:
case 2837:
case 3126:
case 3639:
case 370:
case 69:
case 361:
case 3541:
case 826:
case 580:
case 1737:
case 3064:
case 957:
case 1733:
case 2604:
case 368:
case 1392:
case 1183:
case 1993:
case 1036:
case 3275:
case 3268:
case 2327:
case 2368:
case 3137:
case 3172:
case 2892:
case 534:
case 55:
case 92:
case 2367:
case 2615:
case 4003:
case 2429:
case 302:
case 2852:
case 407:
case 4005:
case 2405:
case 2232:
case 3838:
case 3286:
case 1332:
case 977:
case 1492:
case 2899:
case 2878:
case 975:
case 3400:
case 2174:
case 2404:
case 1329:
case 3651:
case 3763:
case 1466:
case 928:
case 1657:
case 2975:
case 3893:
case 1127:
case 2411:
case 3412:
case 2031:
case 473:
case 1455:
case 257:
case 3085:
case 1033:
case 801:
case 697:
case 606:
case 3774:
case 1706:
case 1521:
case 888:
case 4059:
case 147:
case 2103:
case 2136:
case 2896:
case 1825:
case 3143:
case 2196:
case 2624:
case 2432:
case 1287:
case 2911:
case 1477:
case 3816:
case 1136:
case 3658:
case 1273:
case 2410:
case 1620:
case 1353:
case 2221:
case 122:
case 712:
case 1902:
case 1384:
case 1232:
case 656:
case 2462:
case 923:
case 516:
case 2310:
case 936:
case 2830:
case 1712:
case 4076:
case 1955:
case 2639:
case 3804:
case 3401:
case 867:
case 2864:
case 3103:
case 2069:
case 938:
case 594:
case 2036:
case 2185:
case 933:
case 1129:
case 553:
case 2203:
case 3397:
case 2385:
case 2523:
case 3383:
case 226:
case 1210:
case 2350:
case 3691:
case 1610:
case 2397:
case 813:
case 1919:
case 2402:
case 831:
case 1609:
case 2672:
case 3:
case 3470:
case 3797:
case 160:
case 779:
case 47:
case 2611:
case 2657:
case 2316:
case 2732:
case 3721:
case 1838:
case 373:
case 3239:
case 789:
case 3117:
case 1694:
case 1053:
case 740:
case 3762:
case 1982:
case 3936:
case 2825:
case 2152:
case 1198:
case 1716:
case 3414:
case 2267:
case 591:
case 3338:
case 1445:
case 2667:
case 2168:
case 4019:
case 3666:
case 3573:
case 2957:
case 4030:
case 3128:
case 2923:
case 1174:
case 2182:
case 1881:
case 4043:
case 1424:
case 3362:
case 2338:
case 3197:
case 1503:
case 891:
case 1731:
case 1005:
case 1457:
case 3467:
case 3499:
case 364:
case 1914:
case 2793:
case 1887:
case 1068:
case 3206:
case 1039:
case 3935:
case 2738:
case 390:
case 633:
case 3652:
case 1363:
case 1284:
case 2828:
case 3017:
case 1908:
case 1931:
case 3742:
case 1335:
case 1653:
case 1443:
case 1:
case 771:
case 2982:
case 2419:
case 1670:
case 2663:
case 1580:
case 893:
case 935:
case 1989:
case 3371:
case 1669:
case 2958:
case 2568:
case 2184:
case 864:
case 1074:
case 1903:
case 2416:
case 610:
case 1247:
case 1872:
case 1721:
case 2983:
case 453:
case 2110:
case 2687:
case 188:
case 2364:
case 1551:
case 1333:
case 3150:
case 506:
case 3861:
case 3378:
case 2156:
case 2730:
case 2993:
case 2576:
case 4082:
case 1349:
case 3431:
case 3438:
case 1487:
case 2946:
case 3370:
case 3939:
case 1673:
case 3700:
case 944:
case 2590:
case 396:
case 1425:
case 2685:
case 2594:
case 3903:
case 3233:
case 3314:
case 1936:
case 2274:
case 449:
case 392:
case 797:
case 2827:
case 1947:
case 1117:
case 561:
case 2778:
case 3748:
case 3423:
case 2855:
case 2100:
case 1634:
case 3556:
case 2165:
case 2073:
case 1106:
case 884:
case 4040:
case 2061:
case 2820:
case 2255:
case 1820:
case 2173:
case 2578:
case 3262:
case 3713:
case 1408:
case 1765:
case 117:
case 3922:
case 2487:
case 114:
case 650:
case 1904:
case 2090:
case 2108:
case 3153:
case 1734:
case 3981:
case 1512:
case 1035:
case 2071:
case 3718:
case 3318:
case 142:
case 2607:
case 1289:
case 3546:
case 2322:
case 1032:
case 2790:
case 2118:
case 590:
case 2386:
case 3189:
case 941:
case 2655:
case 2270:
case 14:
case 1387:
case 2951:
case 2646:
case 4079:
case 3139:
case 1683:
case 2370:
case 2880:
case 3685:
case 1163:
case 660:
case 1510:
case 1883:
case 3576:
case 1055:
case 1066:
case 1494:
case 2735:
case 3612:
case 1959:
case 3040:
case 1676:
case 1188:
case 2442:
case 3928:
case 1846:
case 1637:
case 1500:
case 3034:
case 2543:
case 2859:
case 3927:
case 3416:
case 2947:
case 3996:
case 1165:
case 2413:
case 1270:
case 3025:
case 4017:
case 2085:
case 3037:
case 3992:
case 1554:
case 3888:
case 2513:
case 3771:
case 1767:
case 3428:
case 2962:
case 1278:
case 2818:
case 661:
case 2560:
case 1832:
case 736:
case 1320:
case 1446:
case 597:
case 536:
case 269:
case 2936:
case 1376:
case 3280:
case 1900:
case 3323:
case 2996:
case 458:
case 3802:
case 388:
case 3807:
case 1101:
case 3917:
case 3692:
case 225:
case 3973:
case 3432:
case 3367:
case 3790:
case 3441:
case 3959:
case 2785:
case 979:
case 2824:
case 2465:
case 278:
case 2167:
case 1560:
case 1854:
case 2851:
case 3186:
case 2620:
case 1409:
case 2648:
case 3157:
case 44:
case 2097:
case 2087:
case 96:
case 998:
case 2381:
case 1617:
case 1476:
case 2633:
case 2394:
case 3716:
case 1643:
case 4053:
case 250:
case 3132:
case 76:
case 574:
case 2887:
case 942:
case 288:
case 1086:
case 3293:
case 1042:
case 2094:
case 2043:
case 2886:
case 3057:
case 3388:
case 339:
case 2705:
case 1645:
case 572:
case 854:
case 1692:
case 899:
case 3168:
case 2325:
case 2003:
case 3720:
case 4094:
case 2927:
case 495:
case 1062:
case 3352:
case 2537:
case 2494:
case 1216:
case 2481:
case 3092:
case 2691:
case 1909:
case 1834:
case 2253:
case 235:
case 2861:
case 1223:
case 1208:
case 3303:
case 3731:
case 3011:
case 805:
case 2484:
case 1124:
case 3185:
case 3030:
case 879:
case 2492:
case 3673:
case 3786:
case 2369:
case 1549:
case 1497:
case 4021:
case 3898:
case 2670:
case 2379:
case 2384:
case 3519:
case 2806:
case 1080:
case 3445:
case 3118:
case 2875:
case 274:
case 497:
case 3537:
case 2791:
case 1702:
case 271:
case 134:
case 2609:
case 2273:
case 54:
case 512:
case 3176:
case 1719:
case 3119:
case 2713:
case 1627:
case 1616:
case 3135:
case 3756:
case 3306:
case 1362:
case 2801:
case 2328:
case 1894:
case 3184:
case 208:
case 2696:
case 377:
case 2726:
case 3043:
case 1590:
case 1605:
case 3317:
case 1030:
case 3703:
case 1473:
case 1574:
case 2770:
case 194:
case 781:
case 4093:
case 314:
case 2573:
case 1275:
case 2193:
case 1148:
case 1416:
case 3364:
case 2099:
case 1655:
case 422:
case 993:
case 2093:
case 365:
case 2457:
case 1204:
case 1766:
case 1818:
case 2577:
case 3386:
case 2612:
case 3075:
case 2220:
case 870:
case 907:
case 782:
case 3059:
case 3402:
case 1268:
case 3244:
case 1016:
case 757:
case 1988:
case 2960:
case 927:
case 3259:
case 3761:
case 2502:
case 897:
case 1126:
case 1686:
case 3492:
case 1594:
case 2890:
case 1417:
case 1130:
case 3552:
case 2293:
case 385:
case 1810:
case 1364:
case 3946:
case 3569:
case 3125:
case 3205:
case 1027:
case 3874:
case 1827:
case 1971:
case 1073:
case 705:
case 1449:
case 4089:
case 2541:
case 3434:
case 2745:
case 1406:
case 961:
case 109:
case 167:
case 3349:
case 2625:
case 4060:
case 3199:
case 1496:
case 2333:
case 3429:
case 1418:
case 2089:
case 3877:
case 2850:
case 85:
case 964:
case 3010:
case 2474:
case 1009:
case 2699:
case 2963:
case 1984:
case 3046:
case 1994:
case 3050:
case 1962:
case 2665:
case 2062:
case 103:
case 796:
case 3883:
case 1583:
case 1029:
case 1519:
case 1748:
case 1264:
case 1196:
case 2135:
case 3234:
case 1791:
case 1889:
case 1804:
case 2259:
case 3747:
case 3688:
case 2506:
case 3377:
case 1958:
case 4066:
case 7:
case 218:
case 1020:
case 71:
case 747:
case 2248:
case 40:
case 1261:
case 2414:
case 1915:
case 1089:
case 2618:
case 2885:
case 2836:
case 1773:
case 3443:
case 918:
case 651:
case 1310:
case 2298:
case 2566:
case 2214:
case 2155:
case 3919:
case 2759:
case 1596:
case 434:
case 1888:
case 2832:
case 1296:
case 1658:
case 2355:
case 1848:
case 3131:
case 3351:
case 2989:
case 1378:
case 2300:
case 3646:
case 1064:
case 613:
case 2680:
case 332:
case 2721:
case 2001:
case 952:
case 3087:
case 3301:
case 1396:
case 2151:
case 2480:
case 2440:
case 753:
case 182:
case 959:
case 3706:
case 2970:
case 4075:
case 375:
case 355:
case 1098:
case 744:
case 2348:
case 1685:
case 2583:
case 985:
case 440:
case 2549:
case 2425:
case 169:
case 2216:
case 951:
case 3527:
case 204:
case 3719:
case 1969:
case 258:
case 3468:
case 3147:
case 1202:
case 3855:
case 1736:
case 1469:
case 546:
case 2501:
case 1423:
case 2254:
case 1508:
case 1448:
case 382:
case 3963:
case 2652:
case 2301:
case 3500:
case 2562:
case 2917:
case 124:
case 3795:
case 3007:
case 3082:
case 1565:
case 1833:
case 2320:
case 3376:
case 3636:
case 3732:
case 3067:
case 2831:
case 438:
case 494:
case 2509:
case 3399:
case 1744:
case 2027:
case 1647:
case 579:
case 670:
case 1901:
case 1239:
case 765:
case 146:
case 3283:
case 2059:
case 1479:
case 3791:
case 3403:
case 70:
case 2835:
case 4048:
case 2986:
case 2063:
case 1642:
case 1682:
case 3543:
case 1372:
case 2906:
case 2033:
case 2037:
case 3392:
case 3829:
case 2894:
case 3637:
case 2563:
case 3096:
case 1243:
case 2703:
case 2796:
case 3151:
case 1906:
case 1813:
case 3298:
case 1882:
case 940:
case 2671:
case 2053:
case 2945:
case 727:
case 4084:
case 1873:
case 1513:
case 1028:
case 3214:
case 53:
case 3669:
case 2014:
case 569:
case 1390:
case 3607:
case 154:
case 4000:
case 1442:
case 1110:
case 1979:
case 2821:
case 3966:
case 1927:
case 406:
case 543:
case 1334:
case 2105:
case 542:
case 3331:
case 3642:
case 2531:
case 827:
case 1630:
case 3591:
case 4002:
case 2342:
case 4039:
case 35:
case 1541:
case 30:
case 2471:
case 1856:
case 3452:
case 2706:
case 3960:
case 3241:
case 444:
case 3145:
case 1374:
case 2275:
case 276:
case 1709:
case 2679:
case 3312:
case 1729:
case 1301:
case 3933:
case 88:
case 3356:
case 1056:
case 2676:
case 3264:
case 2127:
case 618:
case 2964:
case 1207:
case 1227:
case 2978:
case 2264:
case 1782:
case 1652:
case 912:
case 2241:
case 632:
case 1428:
case 3009:
case 787:
case 1985:
case 3069:
case 1625:
case 1462:
case 3056:
case 1099:
case 3878:
case 2460:
case 2727:
case 1242:
case 1799:
case 113:
case 522:
case 755:
case 2792:
case 236:
case 726:
case 1411:
case 3337:
case 1967:
case 2666:
case 1867:
case 1816:
case 338:
case 2984:
case 3986:
case 4014:
case 2229:
case 248:
case 2175:
case 2498:
case 2750:
case 294:
case 3461:
case 637:
case 1151:
case 1689:
case 2223:
case 3930:
case 1211:
case 2579:
case 709:
case 4052:
case 1547:
case 3810:
case 3956:
case 1234:
case 1107:
case 286:
case 1783:
case 3545:
case 1746:
case 1651:
case 1690:
case 643:
case 2913:
case 383:
case 2740:
case 3497:
case 2866:
case 3062:
case 2070:
case 593:
case 2698:
case 687:
case 3223:
case 3565:
case 2701:
case 2434:
case 3284:
case 181:
case 1407:
case 1120:
case 2865:
case 622:
case 4057:
case 2895:
case 2995:
case 3509:
case 639:
case 371:
case 3905:
case 1705:
case 788:
case 943:
case 3427:
case 94:
case 2057:
case 3517:
case 1566:
case 202:
case 586:
case 214:
case 463:
case 602:
case 1373:
case 4086:
case 1176:
case 1514:
case 3320:
case 1824:
case 2532:
case 3014:
case 2524:
case 541:
case 3985:
case 2428:
case 2797:
case 1974:
case 3472:
case 3701:
case 676:
case 3682:
case 1700:
case 3738:
case 2924:
case 41:
case 1600:
case 3859:
case 2955:
case 352:
case 3580:
case 252:
case 1031:
case 2910:
case 1298:
case 2213:
case 4007:
case 2627:
case 22:
case 1157:
case 762:
case 1672:
case 2822:
case 3411:
case 3004:
case 2794:
case 3833:
case 1491:
case 3875:
case 1471:
case 3473:
case 1490:
case 2879:
case 1757:
case 2176:
case 3193:
case 1187:
case 2360:
case 3163:
case 3699:
case 347:
case 2516:
case 3539:
case 625:
case 1375:
case 1076:
case 2035:
case 2621:
case 1351:
case 2207:
case 125:
case 2637:
case 2010:
case 38:
case 3510:
case 2728:
case 3860:
case 3217:
case 3929:
case 452:
case 3820:
case 3464:
case 997:
case 716:
case 664:
case 567:
case 2653:
case 193:
case 372:
case 2636:
case 1179:
case 1100:
case 2436:
case 1995:
case 1403:
case 986:
case 2588:
case 2842:
case 1677:
case 3707:
case 3726:
case 2383:
case 4050:
case 1978:
case 1014:
case 3236:
case 3457:
case 3113:
case 630:
case 1470:
case 1238:
case 3705:
case 3775:
case 3142:
case 1714:
case 173:
case 3862:
case 3415:
case 617:
case 3723:
case 2352:
case 256:
case 772:
case 3456:
case 976:
case 3375:
case 3332:
case 1939:
case 3333:
case 2586:
case 514:
case 2199:
case 1158:
case 2231:
case 3631:
case 3904:
case 909:
case 3817:
case 3683:
case 34:
case 2681:
case 183:
case 3065:
case 3696:
case 2242:
case 906:
case 3524:
case 4024:
case 57:
case 4051:
case 1790:
case 3590:
case 877:
case 2718:
case 1316:
case 3116:
case 350:
case 2129:
case 326:
case 853:
case 152:
case 531:
case 1306:
case 3013:
case 1687:
case 1199:
case 1875:
case 1178:
case 2208:
case 2307:
case 1420:
case 3969:
case 3882:
case 126:
case 5:
case 777:
case 2640:
case 1331:
case 1224:
case 2707:
case 1221:
case 1134:
case 1768:
case 2309:
case 2788:
case 1201:
case 1229:
case 3454:
case 3779:
case 2128:
case 29:
case 2949:
case 1246:
case 3498:
case 2816:
case 911:
case 3277:
case 2762:
case 972:
case 1696:
case 3460:
case 2903:
case 1348:
case 4078:
case 2697:
case 442:
case 668:
case 1944:
case 197:
case 1002:
case 1844:
case 3254:
case 3269:
case 2677:
case 2287:
case 3297:
case 1257:
case 704:
case 895:
case 33:
case 1507:
case 431:
case 3326:
case 2028:
case 2510:
case 3823:
case 3160:
case 804:
case 476:
case 3425:
case 1976:
case 910:
case 2286:
case 3886:
case 474:
case 1254:
case 2844:
case 180:
case 3242:
case 1622:
case 82:
case 946:
case 242:
case 560:
case 3715:
case 2303:
case 793:
case 3529:
case 411:
case 2981:
case 2764:
case 1772:
case 3194:
case 3003:
case 3950:
case 3449:
case 809:
case 1092:
case 1920:
case 1140:
case 2919:
case 3005:
case 2359:
case 525:
case 2060:
case 3730:
case 611:
case 1218:
case 3586:
case 2926:
case 2169:
case 2552:
case 2326:
case 792:
case 3604:
case 700:
case 3785:
case 3026:
case 1633:
case 1433:
case 836:
case 3729:
case 432:
case 4095:
case 1488:
case 1003:
case 1057:
case 666:
case 133:
case 3181:
case 3993:
case 2499:
case 2889:
case 2142:
case 2211:
case 2545:
case 2674:
case 1274:
case 3516:
case 178:
case 1336:
case 1905:
case 1385:
case 2317:
case 1973:
case 1760:
case 2922:
case 3257:
case 960:
case 337:
case 3166:
case 2940:
case 1499:
case 3339:
case 571:
case 3045:
case 268:
case 2236:
case 3095:
case 3012:
case 2206:
case 2669:
case 2839:
case 681:
case 2358:
case 1898:
case 965:
case 1688:
case 139:
case 3811:
case 417:
case 1917:
case 570:
case 2418:
case 1067:
case 3717:
case 1429:
case 2171:
case 1251:
case 1153:
case 3799:
case 1740:
case 2493:
case 3210:
case 1614:
case 451:
case 2390:
case 526:
case 845:
case 174:
case 2158:
case 2860:
case 3964:
case 3894:
case 2313:
case 75:
case 2299:
case 408:
case 1509:
case 2525:
case 917:
case 2944:
case 3616:
case 3819:
case 1769:
case 1701:
case 43:
case 750:
case 636:
case 1498:
case 994:
case 2709:
case 2574:
case 3679:
case 3787:
case 1671:
case 863:
case 1998:
case 2527:
case 3344:
case 889:
case 868:
case 176:
case 4044:
case 1803:
case 357:
case 3477:
case 2737:
case 3436:
case 421:
case 1777:
case 80:
case 3063:
case 2769:
case 1845:
case 1046:
case 3216:
case 3608:
case 4070:
case 1438:
case 1022:
case 2834:
case 2075:
case 1567:
case 108:
case 1851:
case 319:
case 2533:
case 1751:
case 849:
case 65:
case 2767:
case 1182:
case 822:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1699902002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,];
var gg_b = "1699902002/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
