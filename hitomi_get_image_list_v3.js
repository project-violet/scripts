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
case 3046:
case 1355:
case 2671:
case 3859:
case 2533:
case 3886:
case 4088:
case 3612:
case 898:
case 2896:
case 4093:
case 241:
case 4041:
case 2813:
case 1794:
case 958:
case 2062:
case 3818:
case 2015:
case 1485:
case 1443:
case 1491:
case 362:
case 1989:
case 1607:
case 2422:
case 3011:
case 1897:
case 2441:
case 3498:
case 2493:
case 3949:
case 1018:
case 3097:
case 3626:
case 2744:
case 15:
case 195:
case 2087:
case 1417:
case 3394:
case 731:
case 3230:
case 661:
case 2358:
case 1531:
case 2080:
case 1410:
case 3184:
case 501:
case 1509:
case 2751:
case 1846:
case 3090:
case 625:
case 3402:
case 289:
case 3755:
case 1086:
case 1673:
case 260:
case 916:
case 1648:
case 3309:
case 242:
case 1553:
case 3860:
case 464:
case 3622:
case 1681:
case 1695:
case 2335:
case 207:
case 1249:
case 1924:
case 2412:
case 3774:
case 3764:
case 3135:
case 1594:
case 3867:
case 3877:
case 2969:
case 3461:
case 1427:
case 446:
case 447:
case 293:
case 2892:
case 2544:
case 1468:
case 17:
case 1821:
case 3616:
case 2329:
case 340:
case 1028:
case 1374:
case 3042:
case 3214:
case 2645:
case 2039:
case 546:
case 1434:
case 1060:
case 1070:
case 2426:
case 3555:
case 2001:
case 3641:
case 3803:
case 3693:
case 2808:
case 2551:
case 4012:
case 1709:
case 662:
case 3688:
case 502:
case 3129:
case 2076:
case 1420:
case 2683:
case 1454:
case 2086:
case 2663:
case 831:
case 3678:
case 3668:
case 705:
case 1840:
case 1194:
case 2846:
case 2509:
case 1751:
case 548:
case 750:
case 295:
case 1087:
case 1319:
case 1153:
case 965:
case 3013:
case 3620:
case 1847:
case 1488:
case 3236:
case 921:
case 1441:
case 686:
case 2607:
case 4010:
case 2914:
case 3155:
case 3887:
case 3999:
case 798:
case 1015:
case 2485:
case 3784:
case 3495:
case 2151:
case 1813:
case 208:
case 3758:
case 2144:
case 2753:
case 1896:
case 3351:
case 1671:
case 1661:
case 284:
case 4017:
case 2890:
case 1066:
case 829:
case 1551:
case 469:
case 2338:
case 770:
case 1698:
case 386:
case 1001:
case 623:
case 3617:
case 3174:
case 2060:
case 1039:
case 832:
case 3735:
case 609:
case 580:
case 3825:
case 3610:
case 2364:
case 2374:
case 3463:
case 3473:
case 2821:
case 1602:
case 3250:
case 2427:
case 193:
case 4034:
case 1969:
case 1025:
case 2842:
case 1109:
case 2924:
case 2249:
case 4027:
case 1335:
case 3232:
case 3685:
case 3008:
case 2695:
case 897:
case 3839:
case 2937:
case 2648:
case 11:
case 3691:
case 3801:
case 2267:
case 2785:
case 902:
case 285:
case 2494:
case 3341:
case 2398:
case 463:
case 1565:
case 1722:
case 3915:
case 823:
case 1638:
case 3388:
case 632:
case 3972:
case 1947:
case 3748:
case 2154:
case 3050:
case 2743:
case 947:
case 946:
case 2383:
case 809:
case 1940:
case 762:
case 2193:
case 2188:
case 1832:
case 3145:
case 1674:
case 3507:
case 2453:
case 152:
case 1117:
case 2946:
case 1239:
case 2270:
case 2260:
case 3032:
case 2203:
case 127:
case 1996:
case 2710:
case 331:
case 1185:
case 1754:
case 1143:
case 4094:
case 964:
case 36:
case 2534:
case 3899:
case 1348:
case 1788:
case 3609:
case 2889:
case 2814:
case 1793:
case 2856:
case 434:
case 3322:
case 696:
case 478:
case 2997:
case 1741:
case 704:
case 2049:
case 2527:
case 2635:
case 1765:
case 631:
case 2658:
case 3079:
case 1134:
case 590:
case 3925:
case 4009:
case 3548:
case 2591:
case 2218:
case 2585:
case 1992:
case 3700:
case 50:
case 1120:
case 396:
case 416:
case 151:
case 2286:
case 73:
case 172:
case 1168:
case 1433:
case 490:
case 2852:
case 2619:
case 3326:
case 3804:
case 761:
case 3966:
case 2905:
case 228:
case 1726:
case 2734:
case 2165:
case 3106:
case 329:
case 2409:
case 1004:
case 3939:
case 740:
case 3773:
case 1300:
case 2768:
case 2830:
case 1879:
case 2361:
case 2727:
case 2824:
case 1588:
case 1215:
case 3312:
case 458:
case 1262:
case 1272:
case 2306:
case 1541:
case 3375:
case 1527:
case 1635:
case 3745:
case 3221:
case 2444:
case 1049:
case 1578:
case 3918:
case 2850:
case 2913:
case 2381:
case 1856:
case 2793:
case 305:
case 556:
case 3702:
case 2191:
case 2143:
case 2716:
case 1990:
case 2754:
case 2185:
case 2857:
case 2996:
case 226:
case 888:
case 3959:
case 1946:
case 539:
case 252:
case 2201:
case 2664:
case 670:
case 1629:
case 2832:
case 299:
case 1302:
case 3205:
case 418:
case 1116:
case 3633:
case 2947:
case 4051:
case 2512:
case 439:
case 3849:
case 2722:
case 3506:
case 1494:
case 3317:
case 1228:
case 2110:
case 3014:
case 3056:
case 518:
case 709:
case 1345:
case 862:
case 1911:
case 422:
case 3651:
case 4033:
case 1824:
case 2836:
case 1727:
case 476:
case 3928:
case 3545:
case 2869:
case 2923:
case 3107:
case 1942:
case 3211:
case 1768:
case 1778:
case 14:
case 1517:
case 2300:
case 786:
case 3052:
case 1431:
case 3970:
case 2004:
case 576:
case 577:
case 2726:
case 1112:
case 128:
case 1905:
case 2554:
case 521:
case 2:
case 1684:
case 3290:
case 1852:
case 3163:
case 2168:
case 605:
case 3438:
case 0:
case 1259:
case 251:
case 130:
case 2363:
case 2120:
case 421:
case 1921:
case 861:
case 3982:
case 1218:
case 3761:
case 3771:
case 2992:
case 2712:
case 2134:
case 3030:
case 3474:
case 2287:
case 83:
case 2023:
case 3374:
case 4007:
case 568:
case 1289:
case 3067:
case 2825:
case 2473:
case 938:
case 3133:
case 37:
case 3478:
case 2138:
case 1641:
case 286:
case 3731:
case 1005:
case 1129:
case 3338:
case 1688:
case 2257:
case 3434:
case 2164:
case 2174:
case 3060:
case 1555:
case 3695:
case 2866:
case 4063:
case 4073:
case 582:
case 3937:
case 1738:
case 1331:
case 473:
case 1860:
case 3553:
case 2839:
case 482:
case 1877:
case 2729:
case 1471:
case 1461:
case 3930:
case 772:
case 3924:
case 161:
case 2092:
case 830:
case 1764:
case 727:
case 1158:
case 3811:
case 2279:
case 954:
case 2269:
case 1394:
case 1230:
case 395:
case 3417:
case 1224:
case 1498:
case 2815:
case 1483:
case 2013:
case 2872:
case 1402:
case 2627:
case 188:
case 3086:
case 3673:
case 3059:
case 1755:
case 1184:
case 1353:
case 4081:
case 549:
case 3846:
case 1090:
case 3509:
case 308:
case 2040:
case 3144:
case 67:
case 3355:
case 3600:
case 1252:
case 3890:
case 1046:
case 384:
case 581:
case 3491:
case 2155:
case 3443:
case 885:
case 3897:
case 3914:
case 3607:
case 553:
case 1564:
case 3956:
case 799:
case 1818:
case 2047:
case 2495:
case 223:
case 481:
case 3485:
case 2344:
case 2719:
case 2784:
case 2774:
case 3465:
case 261:
case 1092:
case 59:
case 2021:
case 3823:
case 1519:
case 2828:
case 3131:
case 2471:
case 1729:
case 2877:
case 2867:
case 1407:
case 1839:
case 2860:
case 730:
case 1558:
case 3733:
case 2309:
case 2738:
case 342:
case 455:
case 1691:
case 306:
case 307:
case 872:
case 1685:
case 1232:
case 1866:
case 1876:
case 2555:
case 1617:
case 3001:
case 4061:
case 4071:
case 3645:
case 1164:
case 513:
case 3039:
case 2688:
case 3066:
case 1333:
case 4006:
case 186:
case 3698:
case 2803:
case 2693:
case 74:
case 1138:
case 2654:
case 240:
case 3892:
case 413:
case 3602:
case 1825:
case 2214:
case 2289:
case 2256:
case 728:
case 959:
case 1719:
case 1344:
case 1784:
case 3015:
case 1529:
case 3950:
case 3813:
case 123:
case 3072:
case 3062:
case 1047:
case 2818:
case 2574:
case 992:
case 2011:
case 575:
case 1155:
case 1880:
case 693:
case 3671:
case 4045:
case 2046:
case 871:
case 3896:
case 544:
case 785:
case 2665:
case 899:
case 3533:
case 2859:
case 3194:
case 204:
case 2755:
case 3932:
case 1678:
case 943:
case 3454:
case 826:
case 827:
case 1535:
case 1627:
case 1096:
case 3840:
case 642:
case 1862:
case 61:
case 794:
case 937:
case 2483:
case 1013:
case 1620:
case 2498:
case 1236:
case 2949:
case 2224:
case 3087:
case 2230:
case 1269:
case 1279:
case 606:
case 2445:
case 3319:
case 1634:
case 567:
case 48:
case 2052:
case 2960:
case 2970:
case 2246:
case 1966:
case 1240:
case 1435:
case 2502:
case 3588:
case 3215:
case 2651:
case 4038:
case 981:
case 58:
case 3272:
case 1365:
case 2598:
case 3593:
case 3655:
case 3300:
case 2967:
case 270:
case 1763:
case 1773:
case 2545:
case 2107:
case 3879:
case 3869:
case 949:
case 1213:
case 2327:
case 2761:
case 3992:
case 1429:
case 3363:
case 2024:
case 3373:
case 3120:
case 1036:
case 2368:
case 1595:
case 2474:
case 1079:
case 3134:
case 915:
case 1581:
case 2706:
case 1925:
case 2297:
case 627:
case 626:
case 842:
case 3280:
case 1804:
case 2037:
case 224:
case 3:
case 3908:
case 1707:
case 196:
case 351:
case 2173:
case 372:
case 807:
case 3178:
case 3168:
case 2455:
case 16:
case 973:
case 3754:
case 327:
case 3451:
case 2959:
case 2986:
case 1208:
case 889:
case 3185:
case 860:
case 3996:
case 3395:
case 6:
case 1573:
case 250:
case 3850:
case 2745:
case 3348:
case 1987:
case 2343:
case 1899:
case 1322:
case 3381:
case 3225:
case 982:
case 3793:
case 2849:
case 1341:
case 3565:
case 2506:
case 1915:
case 474:
case 2633:
case 545:
case 1972:
case 1388:
case 2056:
case 3110:
case 1419:
case 2571:
case 1223:
case 3099:
case 2317:
case 4055:
case 1507:
case 3674:
case 3201:
case 445:
case 3940:
case 1198:
case 1316:
case 968:
case 399:
case 1438:
case 210:
case 967:
case 296:
case 443:
case 3259:
case 124:
case 1037:
case 3852:
case 3684:
case 2326:
case 3619:
case 1334:
case 536:
case 1297:
case 2925:
case 3543:
case 706:
case 2653:
case 1030:
case 543:
case 3126:
case 2700:
case 3921:
case 1368:
case 2036:
case 330:
case 1024:
case 1761:
case 437:
case 1327:
case 4035:
case 71:
case 742:
case 3830:
case 1928:
case 1545:
case 2763:
case 170:
case 2773:
case 3942:
case 492:
case 3778:
case 1967:
case 3517:
case 3306:
case 2247:
case 3824:
case 2312:
case 459:
case 3734:
case 1644:
case 1502:
case 2435:
case 3175:
case 3165:
case 592:
case 2976:
case 328:
case 3112:
case 3510:
case 1246:
case 1970:
case 2161:
case 2171:
case 1052:
case 3431:
case 793:
case 3720:
case 3409:
case 3837:
case 1100:
case 808:
case 3188:
case 2183:
case 3141:
case 2057:
case 1205:
case 3260:
case 3946:
case 2145:
case 2500:
case 628:
case 3228:
case 3494:
case 1561:
case 1571:
case 3345:
case 3277:
case 1056:
case 2748:
case 3116:
case 3743:
case 2050:
case 1633:
case 1506:
case 3856:
case 3814:
case 1798:
case 3997:
case 2322:
case 2631:
case 2899:
case 479:
case 105:
case 2987:
case 514:
case 3527:
case 3635:
case 3282:
case 1745:
case 491:
case 1221:
case 150:
case 3568:
case 1918:
case 2292:
case 231:
case 1986:
case 2208:
case 579:
case 1195:
case 2980:
case 3534:
case 955:
case 99:
case 414:
case 3990:
case 26:
case 1455:
case 1457:
case 356:
case 735:
case 1508:
case 3118:
case 2746:
case 3624:
case 1197:
case 1058:
case 3630:
case 179:
case 1922:
case 114:
case 3981:
case 1019:
case 2991:
case 1387:
case 1747:
case 3948:
case 621:
case 550:
case 3525:
case 3637:
case 2943:
case 748:
case 1190:
case 2985:
case 2711:
case 1844:
case 1263:
case 665:
case 505:
case 3159:
case 2894:
case 1713:
case 1146:
case 2542:
case 2917:
case 2261:
case 3819:
case 986:
case 3275:
case 1993:
case 2797:
case 1941:
case 318:
case 1315:
case 676:
case 498:
case 2790:
case 3566:
case 1954:
case 3780:
case 3340:
case 238:
case 1207:
case 3501:
case 3539:
case 598:
case 4089:
case 2853:
case 4014:
case 322:
case 3254:
case 923:
case 1540:
case 2038:
case 2202:
case 1376:
case 3128:
case 377:
case 376:
case 780:
case 3614:
case 2123:
case 1708:
case 3907:
case 1142:
case 192:
case 2699:
case 470:
case 1792:
case 2328:
case 2511:
case 1479:
case 1469:
case 3160:
case 3170:
case 3900:
case 639:
case 2721:
case 2367:
case 2377:
case 3288:
case 1975:
case 1965:
case 1547:
case 3572:
case 3562:
case 570:
case 1912:
case 1436:
case 2424:
case 864:
case 1325:
case 3222:
case 656:
case 657:
case 1248:
case 3973:
case 3963:
case 2978:
case 143:
case 2927:
case 1833:
case 4024:
case 524:
case 3701:
case 321:
case 3182:
case 3308:
case 1596:
case 137:
case 2705:
case 3766:
case 365:
case 2934:
case 3580:
case 1926:
case 4030:
case 254:
case 2111:
case 2796:
case 3560:
case 1910:
case 1055:
case 3759:
case 174:
case 940:
case 363:
case 3115:
case 3902:
case 1147:
case 3162:
case 1790:
case 4057:
case 2315:
case 1797:
case 3449:
case 2993:
case 1206:
case 119:
case 2362:
case 2372:
case 2988:
case 3983:
case 3945:
case 3311:
case 3718:
case 3577:
case 3567:
case 1604:
case 3227:
case 2273:
case 2263:
case 2844:
case 3278:
case 1985:
case 431:
case 2190:
case 1991:
case 3397:
case 214:
case 835:
case 3234:
case 925:
case 3187:
case 2380:
case 531:
case 378:
case 2058:
case 2197:
case 56:
case 1359:
case 2851:
case 848:
case 2508:
case 3503:
case 2457:
case 291:
case 3031:
case 1452:
case 4079:
case 3125:
case 237:
case 236:
case 2596:
case 3760:
case 2649:
case 2121:
case 3838:
case 1920:
case 316:
case 243:
case 3728:
case 496:
case 497:
case 1927:
case 3632:
case 3321:
case 1382:
case 3767:
case 1978:
case 2513:
case 988:
case 3291:
case 1597:
case 3243:
case 3874:
case 30:
case 2281:
case 1424:
case 2029:
case 3166:
case 2436:
case 2105:
case 1298:
case 1283:
case 2975:
case 869:
case 3906:
case 3657:
case 746:
case 1377:
case 432:
case 1367:
case 3782:
case 3342:
case 18:
case 1245:
case 2479:
case 1074:
case 1064:
case 3139:
case 1511:
case 3217:
case 3971:
case 3961:
case 733:
case 1699:
case 2301:
case 2142:
case 1123:
case 1360:
case 1370:
case 3703:
case 532:
case 3305:
case 1202:
case 2376:
case 2366:
case 2540:
case 403:
case 1132:
case 2893:
case 1756:
case 1349:
case 1789:
case 167:
case 3898:
case 757:
case 3091:
case 1817:
case 2579:
case 1530:
case 1446:
case 878:
case 834:
case 215:
case 1537:
case 2757:
case 249:
case 2682:
case 2235:
case 2440:
case 348:
case 2156:
case 3623:
case 669:
case 2677:
case 1490:
case 3199:
case 281:
case 1002:
case 4047:
case 2951:
case 1150:
case 1098:
case 1157:
case 2229:
case 175:
case 3418:
case 409:
case 1666:
case 722:
case 1045:
case 2822:
case 2670:
case 3314:
case 2660:
case 739:
case 1639:
case 3017:
case 1891:
case 1843:
case 523:
case 1264:
case 998:
case 777:
case 776:
case 1878:
case 1421:
case 2769:
case 2779:
case 1730:
case 487:
case 2492:
case 268:
case 1724:
case 3974:
case 1556:
case 4023:
case 2007:
case 1834:
case 586:
case 587:
case 1255:
case 3938:
case 1737:
case 858:
case 1662:
case 1672:
case 2408:
case 3403:
case 2557:
case 113:
case 1169:
case 3470:
case 3034:
case 905:
case 1909:
case 4092:
case 62:
case 1752:
case 2618:
case 635:
case 2124:
case 3020:
case 1136:
case 3027:
case 2875:
case 890:
case 816:
case 3068:
case 2063:
case 3324:
case 3861:
case 3871:
case 80:
case 3428:
case 273:
case 3330:
case 3294:
case 1680:
case 2423:
case 2137:
case 155:
case 1442:
case 2284:
case 763:
case 2274:
case 1399:
case 2601:
case 2843:
case 2891:
case 2639:
case 1670:
case 3881:
case 1822:
case 3350:
case 2083:
case 2676:
case 2666:
case 3895:
case 3088:
case 1229:
case 1944:
case 153:
case 3041:
case 3054:
case 2150:
case 3233:
case 2238:
case 1667:
case 1677:
case 3504:
case 822:
case 1732:
case 1114:
case 4011:
case 633:
case 244:
case 664:
case 504:
case 3149:
case 3621:
case 3332:
case 857:
case 856:
case 149:
case 1235:
case 1682:
case 1854:
case 2953:
case 2810:
case 2446:
case 3022:
case 1081:
case 3919:
case 2530:
case 1569:
case 1048:
case 910:
case 2349:
case 2756:
case 1893:
case 1447:
case 3462:
case 3472:
case 778:
case 996:
case 3799:
case 3690:
case 3800:
case 255:
case 1137:
case 3379:
case 1423:
case 2680:
case 173:
case 364:
case 1063:
case 1073:
case 931:
case 525:
case 2136:
case 2405:
case 3704:
case 1532:
case 2752:
case 716:
case 182:
case 2909:
case 1258:
case 2179:
case 3026:
case 790:
case 3697:
case 865:
case 2615:
case 346:
case 347:
case 1408:
case 2672:
case 2662:
case 2737:
case 1933:
case 3611:
case 1826:
case 1007:
case 877:
case 876:
case 4042:
case 2061:
case 2589:
case 2514:
case 2556:
case 3425:
case 3646:
case 2724:
case 2006:
case 2827:
case 3075:
case 2730:
case 2421:
case 2868:
case 2878:
case 3012:
case 3873:
case 2777:
case 2767:
case 2321:
case 2518:
case 290:
case 1973:
case 3513:
case 343:
case 3295:
case 1103:
case 530:
case 3281:
case 1222:
case 691:
case 2864:
case 2874:
case 2125:
case 165:
case 1776:
case 2031:
case 882:
case 1580:
case 3926:
case 2838:
case 121:
case 3833:
case 2586:
case 2559:
case 3035:
case 3649:
case 3596:
case 1689:
case 1614:
case 3708:
case 176:
case 3301:
case 2210:
case 412:
case 1177:
case 3142:
case 44:
case 1254:
case 3540:
case 258:
case 1835:
case 3366:
case 3376:
case 2650:
case 2906:
case 2657:
case 1288:
case 941:
case 2166:
case 2176:
case 1293:
case 428:
case 1572:
case 1725:
case 1241:
case 868:
case 3469:
case 1170:
case 1160:
case 1323:
case 2217:
case 2101:
case 1900:
case 2342:
case 1265:
case 1347:
case 3988:
case 692:
case 3362:
case 2983:
case 585:
case 1212:
case 118:
case 3315:
case 2449:
case 1044:
case 2577:
case 2567:
case 659:
case 3713:
case 2528:
case 2311:
case 2945:
case 3200:
case 3523:
case 1884:
case 2786:
case 3207:
case 1501:
case 122:
case 1858:
case 3111:
case 1539:
case 3796:
case 881:
case 2162:
case 3432:
case 3916:
case 1576:
case 263:
case 1780:
case 2902:
case 2669:
case 3740:
case 2679:
case 3380:
case 643:
case 3197:
case 234:
case 1226:
case 2390:
case 767:
case 1396:
case 4049:
case 2220:
case 849:
case 391:
case 157:
case 1624:
case 3844:
case 3263:
case 3273:
case 2278:
case 906:
case 1186:
case 1159:
case 3450:
case 1995:
case 3084:
case 91:
case 3922:
case 314:
case 2397:
case 3190:
case 2094:
case 1762:
case 1772:
case 1637:
case 3367:
case 1342:
case 2900:
case 3721:
case 3328:
case 674:
case 3511:
case 1961:
case 1971:
case 3064:
case 2323:
case 2170:
case 3430:
case 1139:
case 2725:
case 3298:
case 2241:
case 2562:
case 3424:
case 1166:
case 2293:
case 2515:
case 1906:
case 645:
case 813:
case 1650:
case 2216:
case 619:
case 2177:
case 2167:
case 3546:
case 1210:
case 768:
case 277:
case 2689:
case 3370:
case 3123:
case 1770:
case 1760:
case 2308:
case 3192:
case 3920:
case 773:
case 1586:
case 2182:
case 1838:
case 551:
case 95:
case 995:
case 354:
case 2776:
case 572:
case 3705:
case 1125:
case 1243:
case 1864:
case 1874:
case 1291:
case 855:
case 3597:
case 2587:
case 4:
case 10:
case 3108:
case 116:
case 117:
case 451:
case 1728:
case 2829:
case 190:
case 1321:
case 1518:
case 3382:
case 472:
case 3968:
case 1767:
case 2948:
case 1094:
case 3943:
case 2981:
case 1397:
case 2715:
case 749:
case 3456:
case 3489:
case 3414:
case 1180:
case 426:
case 427:
case 3521:
case 866:
case 3711:
case 1278:
case 3985:
case 715:
case 2118:
case 3113:
case 2624:
case 1636:
case 3359:
case 1503:
case 1187:
case 1855:
case 178:
case 1679:
case 1669:
case 1053:
case 2630:
case 1902:
case 2780:
case 374:
case 163:
case 68:
case 2051:
case 1162:
case 1172:
case 3853:
case 2858:
case 222:
case 2501:
case 1786:
case 753:
case 3055:
case 844:
case 1945:
case 471:
case 1528:
case 2652:
case 781:
case 3271:
case 3542:
case 3140:
case 1998:
case 1983:
case 2347:
case 499:
case 2265:
case 911:
case 2476:
case 2466:
case 3136:
case 3405:
case 3169:
case 2026:
case 1470:
case 1034:
case 2807:
case 506:
case 2439:
case 667:
case 2401:
case 1253:
case 743:
case 1294:
case 2369:
case 3680:
case 1861:
case 264:
case 2690:
case 994:
case 736:
case 2800:
case 1477:
case 407:
case 406:
case 300:
case 1324:
case 1068:
case 2425:
case 2646:
case 3071:
case 88:
case 759:
case 3556:
case 593:
case 3868:
case 2012:
case 2873:
case 180:
case 3827:
case 2075:
case 3006:
case 792:
case 3730:
case 3672:
case 3820:
case 493:
case 246:
case 2251:
case 247:
case 1403:
case 3615:
case 313:
case 202:
case 675:
case 3834:
case 2233:
case 4015:
case 1459:
case 2054:
case 3150:
case 1486:
case 4072:
case 874:
case 541:
case 94:
case 1010:
case 912:
case 1623:
case 344:
case 3552:
case 3490:
case 1199:
case 1955:
case 2504:
case 2642:
case 1749:
case 1356:
case 3639:
case 3045:
case 2881:
case 3497:
case 613:
case 845:
case 3601:
case 3843:
case 3274:
case 3264:
case 441:
case 819:
case 3666:
case 2350:
case 1418:
case 2895:
case 135:
case 3994:
case 1043:
case 791:
case 12:
case 3411:
case 2022:
case 1845:
case 4080:
case 2919:
case 2984:
case 3132:
case 2799:
case 3524:
case 820:
case 2415:
case 3756:
case 3349:
case 2332:
case 2621:
case 714:
case 930:
case 2149:
case 560:
case 1231:
case 4087:
case 589:
case 2958:
case 3826:
case 4028:
case 1611:
case 102:
case 3408:
case 859:
case 3933:
case 47:
case 3769:
case 368:
case 1075:
case 1873:
case 280:
case 1863:
case 3550:
case 269:
case 1012:
case 952:
case 2964:
case 2974:
case 681:
case 3736:
case 1646:
case 1599:
case 2104:
case 1425:
case 2078:
case 2068:
case 843:
case 3073:
case 2324:
case 3686:
case 1336:
case 3659:
case 754:
case 2806:
case 2696:
case 2467:
case 3137:
case 1800:
case 3219:
case 2428:
case 2861:
case 2294:
case 2337:
case 382:
case 1439:
case 1026:
case 3532:
case 3618:
case 3124:
case 2613:
case 2020:
case 879:
case 1958:
case 3757:
case 495:
case 720:
case 45:
case 315:
case 1149:
case 3440:
case 3854:
case 1332:
case 349:
case 3682:
case 891:
case 3235:
case 3893:
case 3841:
case 3603:
case 2898:
case 4059:
case 595:
case 2883:
case 951:
case 3447:
case 682:
case 1462:
case 3095:
case 1984:
case 3569:
case 9:
case 2845:
case 22:
case 3081:
case 2043:
case 3750:
case 2091:
case 3048:
case 1088:
case 1605:
case 1350:
case 408:
case 1093:
case 3944:
case 1848:
case 2017:
case 1487:
case 774:
case 484:
case 3822:
case 2356:
case 3660:
case 3677:
case 3667:
case 1642:
case 2955:
case 3732:
case 2199:
case 3628:
case 1480:
case 508:
case 719:
case 2486:
case 1054:
case 1357:
case 381:
case 3496:
case 745:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771772401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,];
var gg_b = "1771772401/";

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
