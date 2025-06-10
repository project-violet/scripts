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
case 617:
case 1130:
case 1647:
case 1523:
case 3632:
case 587:
case 660:
case 98:
case 2272:
case 847:
case 3639:
case 722:
case 189:
case 1680:
case 775:
case 1531:
case 3783:
case 1857:
case 1495:
case 1245:
case 2061:
case 2102:
case 2679:
case 1992:
case 3182:
case 2546:
case 3232:
case 914:
case 2817:
case 1301:
case 2433:
case 651:
case 456:
case 419:
case 2672:
case 2441:
case 1625:
case 2660:
case 2124:
case 2019:
case 2715:
case 1081:
case 2717:
case 724:
case 3866:
case 785:
case 749:
case 1436:
case 888:
case 1059:
case 3883:
case 1757:
case 1706:
case 1148:
case 548:
case 1543:
case 2691:
case 3390:
case 97:
case 1227:
case 1971:
case 3894:
case 764:
case 1910:
case 2526:
case 2365:
case 2367:
case 2016:
case 158:
case 1103:
case 1824:
case 396:
case 998:
case 3869:
case 3949:
case 2993:
case 3353:
case 1709:
case 1432:
case 835:
case 738:
case 3862:
case 4012:
case 3942:
case 31:
case 137:
case 2728:
case 372:
case 1744:
case 907:
case 602:
case 1964:
case 3584:
case 961:
case 1340:
case 1575:
case 3425:
case 3922:
case 2276:
case 2828:
case 3636:
case 2504:
case 2106:
case 3870:
case 921:
case 103:
case 2157:
case 1802:
case 441:
case 1654:
case 1387:
case 646:
case 1809:
case 3374:
case 3762:
case 3065:
case 3067:
case 3316:
case 3198:
case 3568:
case 190:
case 2542:
case 3236:
case 793:
case 1996:
case 2053:
case 282:
case 3334:
case 1460:
case 2425:
case 1641:
case 797:
case 3276:
case 937:
case 3504:
case 3828:
case 3155:
case 2769:
case 2870:
case 1537:
case 634:
case 356:
case 1908:
case 1851:
case 2065:
case 198:
case 1020:
case 2067:
case 805:
case 2163:
case 708:
case 958:
case 3053:
case 2811:
case 1356:
case 274:
case 1882:
case 1307:
case 3074:
case 1789:
case 2447:
case 2445:
case 1313:
case 2297:
case 1621:
case 133:
case 990:
case 296:
case 1085:
case 1183:
case 2869:
case 150:
case 3258:
case 2770:
case 3848:
case 595:
case 2353:
case 526:
case 3993:
case 1596:
case 1166:
case 1751:
case 2942:
case 121:
case 1040:
case 2695:
case 21:
case 2697:
case 1194:
case 1564:
case 265:
case 1975:
case 1977:
case 272:
case 3658:
case 3291:
case 3803:
case 2361:
case 3441:
case 3019:
case 3717:
case 3012:
case 880:
case 2946:
case 1162:
case 496:
case 691:
case 945:
case 41:
case 1414:
case 112:
case 3090:
case 2473:
case 3279:
case 74:
case 2926:
case 1200:
case 2639:
case 2766:
case 2312:
case 2151:
case 1170:
case 3061:
case 474:
case 628:
case 3703:
case 3679:
case 843:
case 1886:
case 341:
case 2232:
case 1111:
case 1863:
case 2189:
case 1600:
case 4065:
case 3817:
case 4067:
case 1359:
case 3110:
case 2652:
case 2528:
case 2659:
case 3601:
case 2300:
case 4073:
case 62:
case 1875:
case 1612:
case 3380:
case 2530:
case 777:
case 1544:
case 1619:
case 147:
case 1060:
case 3171:
case 2722:
case 2252:
case 2962:
case 178:
case 2842:
case 1332:
case 845:
case 585:
case 549:
case 1438:
case 3201:
case 524:
case 2969:
case 2849:
case 3948:
case 4018:
case 2259:
case 294:
case 1212:
case 1509:
case 2131:
case 66:
case 2465:
case 3570:
case 1091:
case 1502:
case 1982:
case 276:
case 3192:
case 3562:
case 3199:
case 943:
case 418:
case 1989:
case 1951:
case 1261:
case 1690:
case 1524:
case 354:
case 575:
case 1487:
case 1485:
case 636:
case 2829:
case 1777:
case 1775:
case 4054:
case 3784:
case 2822:
case 2704:
case 1661:
case 3325:
case 2434:
case 1998:
case 2333:
case 593:
case 3583:
case 310:
case 4047:
case 1401:
case 4045:
case 3566:
case 2678:
case 231:
case 858:
case 3318:
case 3041:
case 500:
case 3220:
case 1397:
case 1395:
case 2503:
case 2108:
case 837:
case 1653:
case 4080:
case 492:
case 1014:
case 3373:
case 3620:
case 2613:
case 3594:
case 1723:
case 2054:
case 2073:
case 557:
case 2605:
case 4027:
case 2656:
case 1104:
case 2994:
case 3685:
case 3687:
case 19:
case 3021:
case 3850:
case 1674:
case 301:
case 803:
case 1149:
case 538:
case 1336:
case 1142:
case 2205:
case 2966:
case 1555:
case 511:
case 1743:
case 3135:
case 3287:
case 116:
case 1274:
case 159:
case 2341:
case 3640:
case 3903:
case 1314:
case 3073:
case 1376:
case 3656:
case 807:
case 2687:
case 3994:
case 1234:
case 1184:
case 2240:
case 3175:
case 3517:
case 1563:
case 1193:
case 3983:
case 1168:
case 898:
case 2033:
case 726:
case 3846:
case 3207:
case 1634:
case 105:
case 3018:
case 2461:
case 2903:
case 3341:
case 530:
case 1097:
case 210:
case 2583:
case 1036:
case 454:
case 2917:
case 2915:
case 709:
case 916:
case 2238:
case 2196:
case 508:
case 1452:
case 1892:
case 3678:
case 2419:
case 2318:
case 2041:
case 1906:
case 821:
case 318:
case 1481:
case 3826:
case 1771:
case 2750:
case 597:
case 2373:
case 3321:
case 2620:
case 1665:
case 15:
case 2164:
case 861:
case 1896:
case 3911:
case 1039:
case 4041:
case 1405:
case 2562:
case 467:
case 2569:
case 1032:
case 1888:
case 3742:
case 3047:
case 410:
case 2474:
case 254:
case 2793:
case 1902:
case 3970:
case 2768:
case 3749:
case 2928:
case 3829:
case 1360:
case 1864:
case 1944:
case 392:
case 3804:
case 3652:
case 1379:
case 3659:
case 3300:
case 2601:
case 812:
case 1764:
case 2171:
case 3025:
case 3842:
case 3962:
case 3252:
case 1582:
case 2511:
case 1589:
case 2201:
case 2453:
case 2868:
case 3259:
case 3969:
case 1796:
case 386:
case 1924:
case 394:
case 143:
case 1551:
case 2347:
case 2345:
case 740:
case 170:
case 3465:
case 4033:
case 3436:
case 2592:
case 3059:
case 379:
case 433:
case 3543:
case 1883:
case 3757:
case 3755:
case 2169:
case 4087:
case 4085:
case 450:
case 2786:
case 941:
case 3081:
case 421:
case 626:
case 3910:
case 532:
case 2923:
case 2476:
case 1390:
case 461:
case 1454:
case 1894:
case 2510:
case 1632:
case 1794:
case 407:
case 27:
case 63:
case 3647:
case 212:
case 2111:
case 2352:
case 3992:
case 2898:
case 2458:
case 498:
case 1239:
case 1189:
case 2600:
case 1151:
case 389:
case 3531:
case 1319:
case 1418:
case 3857:
case 3497:
case 1783:
case 3855:
case 2170:
case 3247:
case 3806:
case 568:
case 1929:
case 3964:
case 3844:
case 3577:
case 3340:
case 2641:
case 1427:
case 2460:
case 1425:
case 513:
case 1568:
case 528:
case 1163:
case 3115:
case 744:
case 2038:
case 729:
case 174:
case 2882:
case 1236:
case 2535:
case 3385:
case 683:
case 1870:
case 1769:
case 801:
case 1065:
case 2020:
case 1067:
case 2241:
case 1316:
case 2851:
case 3809:
case 3005:
case 867:
case 3439:
case 3702:
case 919:
case 956:
case 2588:
case 414:
case 1949:
case 2183:
case 1869:
case 221:
case 2596:
case 3432:
case 810:
case 2621:
case 3320:
case 1447:
case 2313:
case 3937:
case 2789:
case 3935:
case 3218:
case 1711:
case 2085:
case 184:
case 3824:
case 2782:
case 2472:
case 742:
case 48:
case 261:
case 2378:
case 2479:
case 1904:
case 337:
case 2194:
case 2221:
case 2040:
case 11:
case 2977:
case 1034:
case 1480:
case 3588:
case 2439:
case 2005:
case 1258:
case 350:
case 76:
case 3233:
case 1968:
case 4081:
case 2709:
case 3596:
case 2673:
case 3166:
case 1016:
case 1365:
case 1367:
case 3789:
case 3782:
case 2508:
case 333:
case 831:
case 258:
case 3633:
case 1522:
case 72:
case 2744:
case 1730:
case 677:
case 1529:
case 3479:
case 863:
case 3378:
case 1276:
case 2078:
case 1214:
case 1828:
case 91:
case 517:
case 1334:
case 2844:
case 2964:
case 307:
case 972:
case 560:
case 2575:
case 2577:
case 1549:
case 290:
case 1614:
case 2117:
case 2115:
case 984:
case 3889:
case 925:
case 736:
case 1053:
case 3305:
case 3038:
case 3307:
case 2996:
case 1542:
case 2387:
case 3537:
case 3535:
case 551:
case 1106:
case 1748:
case 3491:
case 3851:
case 3020:
case 3241:
case 2809:
case 119:
case 2523:
case 3200:
case 502:
case 37:
case 2130:
case 2647:
case 3571:
case 1421:
case 886:
case 403:
case 771:
case 1703:
case 141:
case 3898:
case 1672:
case 2999:
case 3600:
case 1815:
case 546:
case 1817:
case 2531:
case 490:
case 245:
case 289:
case 1102:
case 2806:
case 3170:
case 2247:
case 2497:
case 2857:
case 2495:
case 2855:
case 3592:
case 2059:
case 3162:
case 279:
case 458:
case 2148:
case 3599:
case 3169:
case 2052:
case 2757:
case 3931:
case 2625:
case 1660:
case 781:
case 3786:
case 1441:
case 3763:
case 1715:
case 1717:
case 2910:
case 3414:
case 892:
case 3476:
case 1691:
case 2225:
case 2227:
case 38:
case 60:
case 3524:
case 4036:
case 1474:
case 3690:
case 1416:
case 3261:
case 1793:
case 2902:
case 734:
case 2407:
case 2456:
case 2896:
case 2032:
case 2735:
case 280:
case 1569:
case 499:
case 3440:
case 3290:
case 1930:
case 2944:
case 45:
case 3072:
case 3777:
case 3079:
case 1784:
case 3126:
case 6:
case 1380:
case 3612:
case 3544:
case 347:
case 3619:
case 2478:
case 2764:
case 1601:
case 2372:
case 2551:
case 243:
case 3509:
case 2924:
case 2796:
case 976:
case 3502:
case 3219:
case 2835:
case 3420:
case 1347:
case 3091:
case 1511:
case 3146:
case 3332:
case 630:
case 1868:
case 1893:
case 1453:
case 2184:
case 2871:
case 2234:
case 1685:
case 1687:
case 1021:
case 1240:
case 1490:
case 2376:
case 3104:
case 2810:
case 1137:
case 1285:
case 1287:
case 931:
case 3506:
case 3555:
case 2634:
case 791:
case 1640:
case 2792:
case 2095:
case 1461:
case 874:
case 316:
case 359:
case 101:
case 2563:
case 3336:
case 1033:
case 3058:
case 3395:
case 1220:
case 2906:
case 1419:
case 1238:
case 1917:
case 3253:
case 2899:
case 2459:
case 1583:
case 728:
case 3986:
case 884:
case 1566:
case 896:
case 872:
case 127:
case 1164:
case 2665:
case 64:
case 2710:
case 1638:
case 3653:
case 3076:
case 1750:
case 1213:
case 720:
case 3957:
case 2397:
case 235:
case 662:
case 1108:
case 123:
case 901:
case 2401:
case 2843:
case 536:
case 3358:
case 3899:
case 3459:
case 2998:
case 3036:
case 1333:
case 2986:
case 131:
case 3892:
case 1613:
case 760:
case 3667:
case 1321:
case 3665:
case 163:
case 3710:
case 2723:
case 622:
case 4079:
case 3771:
case 2122:
case 2653:
case 3234:
case 3871:
case 29:
case 3184:
case 1994:
case 664:
case 52:
case 447:
case 927:
case 4060:
case 1656:
case 2823:
case 1605:
case 649:
case 2743:
case 305:
case 2555:
case 3634:
case 2216:
case 1341:
case 216:
case 259:
case 1983:
case 3598:
case 1515:
case 3563:
case 1256:
case 1207:
case 856:
case 819:
case 2142:
case 657:
case 2877:
case 1027:
case 1722:
case 2619:
case 2544:
case 1652:
case 3379:
case 1804:
case 49:
case 3764:
case 1659:
case 3372:
case 3551:
case 3796:
case 2509:
case 2212:
case 186:
case 3835:
case 2219:
case 2091:
case 581:
case 370:
case 2708:
case 2146:
case 1962:
case 1842:
case 1252:
case 459:
case 611:
case 1969:
case 1849:
case 2339:
case 2438:
case 2524:
case 1047:
case 3391:
case 2951:
case 693:
case 3902:
case 2485:
case 746:
case 3407:
case 3039:
case 2989:
case 3735:
case 600:
case 1548:
case 571:
case 2290:
case 1704:
case 3944:
case 192:
case 3864:
case 4076:
case 2777:
case 2072:
case 1829:
case 366:
case 1140:
case 20:
case 1637:
case 1973:
case 3576:
case 1426:
case 2668:
case 968:
case 3514:
case 1541:
case 395:
case 239:
case 2684:
case 3995:
case 3997:
case 2355:
case 836:
case 2536:
case 1083:
case 928:
case 3398:
case 2268:
case 2958:
case 913:
case 3249:
case 2801:
case 2443:
case 1317:
case 4082:
case 1303:
case 731:
case 3055:
case 3752:
case 2595:
case 1120:
case 2597:
case 2165:
case 991:
case 689:
case 1664:
case 3936:
case 151:
case 2098:
case 723:
case 3629:
case 4051:
case 3781:
case 815:
case 519:
case 1533:
case 3622:
case 86:
case 1954:
case 117:
case 1264:
case 33:
case 1521:
case 3471:
case 3410:
case 487:
case 763:
case 3222:
case 2976:
case 1688:
case 2051:
case 4063:
case 1865:
case 541:
case 1945:
case 3437:
case 3009:
case 2324:
case 776:
case 3705:
case 3002:
case 146:
case 881:
case 3161:
case 1070:
case 3591:
case 2787:
case 1011:
case 3939:
case 2785:
case 2082:
case 2838:
case 1299:
case 1348:
case 1442:
case 690:
case 3932:
case 2089:
case 3190:
case 3044:
case 1699:
case 1734:
case 2979:
case 1692:
case 2344:
case 1330:
case 2250:
case 2840:
case 3778:
case 2960:
case 40:
case 277:
case 1422:
case 2887:
case 2885:
case 104:
case 2738:
case 1671:
case 3351:
case 2408:
case 3713:
case 439:
case 1062:
case 340:
case 786:
case 794:
case 3856:
case 3805:
case 3246:
case 1069:
case 132:
case 3960:
case 2778:
case 3840:
case 3250:
case 377:
case 2572:
case 466:
case 2579:
case 3738:
case 2119:
case 3302:
case 1753:
case 1370:
case 1545:
case 1547:
case 2351:
case 1816:
case 3408:
case 1874:
case 3309:
case 1159:
case 240:
case 2713:
case 2488:
case 946:
case 2389:
case 2246:
case 1623:
case 3532:
case 1311:
case 2856:
case 2382:
case 1048:
case 1152:
case 698:
case 3051:
case 2813:
case 2009:
case 2437:
case 2002:
case 2705:
case 3324:
case 2161:
case 283:
case 3838:
case 2626:
case 4006:
case 1853:
case 1716:
case 2932:
case 1774:
case 754:
case 1030:
case 1484:
case 2190:
case 2560:
case 1527:
case 3477:
case 2044:
case 1900:
case 2878:
case 3740:
case 3431:
case 2057:
case 2055:
case 128:
case 2759:
case 3167:
case 574:
case 4009:
case 2936:
case 1712:
case 2781:
case 1015:
case 1017:
case 1366:
case 767:
case 2153:
case 1719:
case 1383:
case 4002:
case 1394:
case 2471:
case 3423:
case 2410:
case 1573:
case 67:
case 3914:
case 3976:
case 266:
case 572:
case 30:
case 1275:
case 1277:
case 2642:
case 1790:
case 869:
case 2576:
case 2116:
case 920:
case 226:
case 440:
case 339:
case 295:
case 1819:
case 614:
case 3357:
case 3355:
case 3684:
case 701:
case 844:
case 1107:
case 2852:
case 2242:
case 3536:
case 4024:
case 2249:
case 3958:
case 3268:
case 2363:
case 596:
case 3293:
case 422:
case 3760:
case 3879:
case 942:
case 1800:
case 563:
case 397:
case 3556:
case 906:
case 719:
case 1136:
case 1342:
case 1298:
case 523:
case 1448:
case 518:
case 2096:
case 3938:
case 2839:
case 2141:
case 4092:
case 3008:
case 3335:
case 3337:
case 2585:
case 2587:
case 2913:
case 475:
case 688:
case 1068:
case 3482:
case 1093:
case 944:
case 2283:
case 678:
case 2732:
case 2409:
case 2308:
case 2037:
case 1974:
case 3451:
case 3891:
case 353:
case 1916:
case 820:
case 1195:
case 16:
case 1197:
case 1565:
case 3513:
case 2739:
case 3118:
case 2666:
case 3578:
case 1428:
case 1322:
case 817:
case 969:
case 3940:
case 4010:
case 3779:
case 2444:
case 1700:
case 3:
case 2294:
case 257:
case 12:
case 3772:
case 860:
case 3463:
case 586:
case 1417:
case 3858:
case 4035:
case 4037:
case 3248:
case 2952:
case 3486:
case 1741:
case 846:
case 2897:
case 659:
case 1919:
case 2981:
case 1912:
case 249:
case 2669:
case 2010:
case 3023:
case 802:
case 457:
case 2662:
case 3776:
case 3714:
case 3125:
case 4064:
case 1721:
case 3310:
case 592:
case 2323:
case 34:
case 2670:
case 3371:
case 222:
case 3230:
case 1651:
case 1990:
case 3559:
case 2092:
case 2797:
case 804:
case 2211:
case 1132:
case 3043:
case 3552:
case 2099:
case 3628:
case 635:
case 400:
case 3758:
case 3145:
case 741:
case 1251:
case 1961:
case 171:
case 1841:
case 3581:
case 832:
case 3100:
case 1172:
case 497:
case 1179:
case 1026:
case 3611:
case 2310:
case 3670:
case 24:
case 1494:
case 1854:
case 322:
case 1773:
case 2180:
case 1609:
case 65:
case 3797:
case 2559:
case 3501:
case 1718:
case 2043:
case 375:
case 2628:
case 699:
case 1202:
case 362:
case 3270:
case 3331:
case 2630:
case 1209:
case 1512:
case 3343:
case 2901:
case 1046:
case 2463:
case 3959:
case 971:
case 2248:
case 2392:
case 3262:
case 3897:
case 3457:
case 3455:
case 3895:
case 1818:
case 430:
case 385:
case 1224:
case 324:
case 1561:
case 1191:
case 2648:
case 3010:
case 3662:
case 4:
case 2776:
case 3071:
case 2125:
case 1160:
case 1624:
case 828:
case 311:
case 3956:
case 784:
case 796:
case 2388:
case 936:
case 3538:
case 230:
case 1158:
case 3308:
case 3409:
case 3732:
case 501:
case 253:
case 2451:
case 2203:
case 338:
case 670:
case 643:
case 106:
case 3666:
case 868:
case 2578:
case 3683:
case 2603:
case 2940:
case 2364:
case 3294:
case 142:
case 3444:
case 1934:
case 3121:
case 2772:
case 2879:
case 1725:
case 44:
case 782:
case 2617:
case 2615:
case 1029:
case 1880:
case 169:
case 3064:
case 3377:
case 1384:
case 2556:
case 2505:
case 3832:
case 1462:
case 300:
case 96:
case 1368:
case 1469:
case 2215:
case 3839:
case 915:
case 3096:
case 393:
case 891:
case 510:
case 774:
case 3587:
case 2335:
case 2008:
case 2337:
case 1255:
case 1257:
case 3913:
case 1847:
case 2920:
case 208:
case 1967:
case 2366:
case 2712:
case 1781:
case 2015:
case 351:
case 1629:
case 3533:
case 434:
case 1558:
case 598:
case 2719:
case 3138:
case 3288:
case 228:
case 3303:
case 1057:
case 2208:
case 3664:
case 3120:
case 830:
case 2178:
case 1410:
case 3688:
case 1222:
case 75:
case 90:
case 360:
case 2890:
case 2450:
case 3264:
case 317:
case 432:
case 2790:
case 3426:
case 3094:
case 2554:
case 3637:
case 291:
case 2761:
case 1852:
case 1492:
case 1386:
case 2107:
case 3066:
case 1363:
case 955:
case 2933:
case 1398:
case 808:
case 1249:
case 195:
case 2675:
case 2677:
case 1997:
case 2003:
case 2819:
case 3235:
case 84:
case 1572:
case 3210:
case 1646:
case 672:
case 1579:
case 3429:
case 232:
case 61:
case 1778:
case 2631:
case 514:
case 3101:
case 1389:
case 770:
case 2159:
case 3062:
case 140:
case 3767:
case 3069:
case 2152:
case 173:
case 2048:
case 743:
case 1496:
case 4003:
case 1382:
case 1246:
case 1807:
case 2370:
case 1024:
case 625:
case 696:
case 1112:
case 2874:
case 1351:
case 948:
case 3348:
case 2853:
case 2493:
case 3011:
case 1939:
case 413:
case 1626:
case 2774:
case 3292:
case 1437:
case 1813:
case 3945:
case 3947:
case 3865:
case 3070:
case 1756:
case 1002:
case 346:
case 1705:
case 1707:
case 2900:
case 2028:
case 3404:
case 1878:
case 3692:
case 512:
case 2030:
case 3980:
case 1044:
case 57:
case 1560:
case 3369:
case 3468:
case 545:
case 3243:
case 1838:
case 3853:
case 3493:
case 849:
case 788:
case 2442:
case 619:
case 451:
case 2865:
case 2867:
case 1820:
case 2947:
case 2070:
case 246:
case 3028:
case 2699:
case 2734:
case 2692:
case 1740:
case 2404:
case 417:
case 3484:
case 202:
case 3527:
case 1477:
case 747:
case 177:
case 3223:
case 2210:
case 2328:
case 2429:
case 2271:
case 1840:
case 1250:
case 3631:
case 3580:
case 2101:
case 1539:
case 2765:
case 3048:
case 3152:
case 2069:
case 2610:
case 3547:
case 3370:
case 2671:
case 1302:
case 4083:
case 204:
case 1309:
case 3181:
case 875:
case 3874:
case 1991:
case 1650:
case 3816:
case 148:
case 2973:
case 93:
case 2094:
case 2637:
case 1284:
case 3921:
case 0:
case 404:
case 1536:
case 909:
case 3156:
case 3107:
case 3105:
case 1443:
case 2315:
case 2317:
case 1958:
case 3933:
case 139:
case 3675:
case 3677:
case 1306:
case 1684:
case 2918:
case 4069:
case 3017:
case 2446:
case 735:
case 220:
case 641:
case 926:
case 4070:
case 3719:
case 995:
case 811:
case 3941:
case 3208:
case 155:
case 2664:
case 3518:
case 1701:
case 1167:
case 1595:
case 1597:
case 1423:
case 2696:
case 966:
case 1976:
case 857:
case 3890:
case 368:
case 2264:
case 1451:
case 3916:
case 4046:
case 315:
case 1987:
case 3195:
case 36:
case 900:
case 1513:
case 2470:
case 3093:
case 505:
case 3068:
case 2049:
case 130:
case 2158:
case 993:
case 809:
case 3430:
case 2827:
case 1940:
case 3084:
case 1077:
case 32:
case 1:
case 242:
case 2780:
case 83:
case 2004:
case 2606:
case 2655:
case 3534:
case 4026:
case 866:
case 957:
case 707:
case 2727:
case 1760:
case 2725:
case 3686:
case 3698:
case 1872:
case 2114:
case 3800:
case 2176:
case 3663:
case 244:
case 2847:
case 2845:
case 2206:
case 1008:
case 1337:
case 1791:
case 3342:
case 3286:
case 2462:
case 1507:
case 826:
case 1556:
case 1938:
case 599:
case 2393:
case 1217:
case 1215:
case 2368:
case 3298:
case 3448:
case 4022:
case 2602:
case 2854:
case 2494:
case 1371:
case 2609:
case 2773:
case 1230:
case 3721:
case 469:
case 2172:
case 964:
case 3689:
case 3682:
case 1310:
case 2026:
case 1228:
case 840:
case 1758:
case 1145:
case 1147:
case 3733:
case 2519:
case 1581:
case 2512:
case 667:
case 3961:
case 873:
case 924:
case 985:
case 444:
case 429:
case 1552:
case 610:
case 1043:
case 3346:
case 2818:
case 3919:
case 4049:
case 3912:
case 4042:
case 1399:
case 1498:
case 3415:
case 2046:
case 381:
case 1714:
case 2624:
case 4004:
case 2590:
case 1023:
case 2754:
case 1648:
case 442:
case 922:
case 2919:
case 1895:
case 1455:
case 578:
case 149:
case 3224:
case 124:
case 2912:
case 1269:
case 415:
case 2415:
case 2417:
case 46:
case 281:
case 1952:
case 2821:
case 3624:
case 3590:
case 1071:
case 3754:
case 1010:
case 1662:
case 547:
case 877:
case 3494:
case 3854:
case 3244:
case 3350:
case 2651:
case 3609:
case 2689:
case 1611:
case 2682:
case 623:
case 2733:
case 618:
case 3519:
case 3209:
case 2403:
case 2251:
case 2289:
case 3718:
case 1092:
case 3483:
case 436:
case 631:
case 1836:
case 175:
case 3466:
case 789:
case 745:
case 1375:
case 369:
case 3880:
case 3655:
case 3657:
case 3384:
case 3606:
case 9:
case 2686:
case 3022:
case 1978:
case 3114:
case 2698:
case 3176:
case 2663:
case 2800:
case 3574:
case 344:
case 1424:
case 930:
case 1141:
case 790:
case 3965:
case 3206:
case 3845:
case 1587:
case 3462:
case 2286:
case 100:
case 2342:
case 1832:
case 471:
case 2349:
case 3469:
case 2916:
case 2974:
case 1409:
case 215:
case 1308:
case 1037:
case 1402:
case 306:
case 481:
case 3470:
case 26:
case 2197:
case 2565:
case 855:
case 1956:
case 1905:
case 2093:
case 3411:
case 908:
case 1283:
case 3747:
case 1133:
case 3553:
case 1538:
case 559:
case 2430:
case 3934:
case 22:
case 157:
case 1444:
case 2700:
case 2428:
case 2329:
case 997:
case 3780:
case 1666:
case 2322:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749517202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,];
var gg_b = "1749517202/";

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
