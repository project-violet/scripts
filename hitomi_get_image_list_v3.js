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
case 3561:
case 2798:
case 1898:
case 165:
case 1619:
case 2553:
case 1961:
case 761:
case 1811:
case 2545:
case 1749:
case 2711:
case 3769:
case 1653:
case 836:
case 2815:
case 810:
case 655:
case 3121:
case 1715:
case 255:
case 708:
case 1848:
case 2802:
case 2618:
case 1385:
case 3537:
case 2899:
case 1799:
case 2595:
case 1357:
case 1702:
case 999:
case 1089:
case 1518:
case 2254:
case 3336:
case 2022:
case 3868:
case 2381:
case 3918:
case 79:
case 3064:
case 3302:
case 3757:
case 2944:
case 3095:
case 3785:
case 879:
case 988:
case 3162:
case 3644:
case 562:
case 1142:
case 1266:
case 2368:
case 1736:
case 89:
case 4042:
case 2108:
case 1412:
case 3689:
case 2733:
case 3349:
case 3053:
case 2994:
case 1988:
case 3045:
case 1833:
case 2061:
case 3530:
case 861:
case 3251:
case 1109:
case 273:
case 305:
case 3019:
case 4009:
case 1065:
case 2401:
case 710:
case 579:
case 3777:
case 3325:
case 1905:
case 313:
case 3892:
case 3505:
case 1422:
case 1370:
case 3271:
case 428:
case 2185:
case 3073:
case 561:
case 2157:
case 4081:
case 2114:
case 2489:
case 2444:
case 3842:
case 307:
case 2573:
case 74:
case 2012:
case 1324:
case 3770:
case 167:
case 3904:
case 2342:
case 657:
case 536:
case 257:
case 1504:
case 1673:
case 1308:
case 3111:
case 1725:
case 2529:
case 2465:
case 2825:
case 1377:
case 2676:
case 2150:
case 3198:
case 2682:
case 1461:
case 2309:
case 2274:
case 2392:
case 1821:
case 1582:
case 911:
case 192:
case 404:
case 3110:
case 1459:
case 141:
case 3678:
case 114:
case 745:
case 529:
case 4055:
case 4043:
case 316:
case 4087:
case 2978:
case 1155:
case 1187:
case 2907:
case 478:
case 2416:
case 2458:
case 3490:
case 2146:
case 3771:
case 524:
case 2732:
case 3607:
case 1979:
case 4093:
case 977:
case 3875:
case 3208:
case 3579:
case 1007:
case 1371:
case 3483:
case 1827:
case 1806:
case 2706:
case 2727:
case 2079:
case 595:
case 533:
case 1138:
case 1652:
case 348:
case 602:
case 1703:
case 2900:
case 2803:
case 547:
case 3497:
case 845:
case 2435:
case 466:
case 2139:
case 3600:
case 1078:
case 1874:
case 1431:
case 1931:
case 2211:
case 1249:
case 1284:
case 2298:
case 234:
case 2013:
case 724:
case 1351:
case 2586:
case 2060:
case 2572:
case 953:
case 1215:
case 1686:
case 1672:
case 3174:
case 2935:
case 833:
case 2400:
case 601:
case 2387:
case 3739:
case 2059:
case 201:
case 597:
case 1202:
case 1299:
case 639:
case 239:
case 545:
case 1817:
case 158:
case 3034:
case 1854:
case 3880:
case 3127:
case 1583:
case 1016:
case 3132:
case 2171:
case 2690:
case 3746:
case 16:
case 3285:
case 3616:
case 829:
case 25:
case 3990:
case 1766:
case 2426:
case 2534:
case 1590:
case 4075:
case 2380:
case 2916:
case 2478:
case 2640:
case 3513:
case 3751:
case 2031:
case 3072:
case 2710:
case 1913:
case 1863:
case 2233:
case 1810:
case 795:
case 3855:
case 1339:
case 351:
case 3843:
case 676:
case 3120:
case 276:
case 142:
case 1540:
case 191:
case 499:
case 2371:
case 3332:
case 2026:
case 1552:
case 2806:
case 1706:
case 2652:
case 2138:
case 2180:
case 47:
case 494:
case 2703:
case 1900:
case 412:
case 3500:
case 1435:
case 180:
case 1139:
case 270:
case 456:
case 670:
case 3320:
case 1774:
case 2078:
case 2431:
case 713:
case 3486:
case 692:
case 2000:
case 2459:
case 641:
case 214:
case 3578:
case 1720:
case 2460:
case 2923:
case 813:
case 425:
case 2187:
case 2143:
case 1926:
case 4046:
case 1907:
case 1416:
case 488:
case 2832:
case 1146:
case 219:
case 3526:
case 3434:
case 1732:
case 987:
case 3242:
case 2979:
case 3166:
case 505:
case 3327:
case 2193:
case 1690:
case 3846:
case 2634:
case 928:
case 66:
case 2479:
case 1958:
case 3083:
case 3934:
case 3516:
case 1426:
case 1534:
case 3558:
case 3281:
case 2236:
case 1338:
case 460:
case 1640:
case 1478:
case 3896:
case 1031:
case 2863:
case 3659:
case 2423:
case 2960:
case 3787:
case 3097:
case 3743:
case 3755:
case 176:
case 3613:
case 2540:
case 123:
case 686:
case 2959:
case 286:
case 507:
case 3363:
case 1697:
case 1211:
case 3972:
case 134:
case 1013:
case 2396:
case 1586:
case 411:
case 1935:
case 2215:
case 3839:
case 310:
case 1400:
case 1059:
case 101:
case 1343:
case 1387:
case 1683:
case 1647:
case 2299:
case 1248:
case 258:
case 2967:
case 1754:
case 2058:
case 3780:
case 3452:
case 3268:
case 2854:
case 2547:
case 449:
case 3667:
case 2016:
case 4024:
case 3885:
case 798:
case 3857:
case 552:
case 978:
case 909:
case 2266:
case 1368:
case 2142:
case 3091:
case 2736:
case 3056:
case 4008:
case 3781:
case 2922:
case 3018:
case 3814:
case 1108:
case 3964:
case 3311:
case 1994:
case 884:
case 2930:
case 1263:
case 2350:
case 4077:
case 2405:
case 324:
case 904:
case 283:
case 2192:
case 126:
case 683:
case 3688:
case 173:
case 851:
case 2065:
case 3287:
case 931:
case 1401:
case 1030:
case 3953:
case 2619:
case 3850:
case 1641:
case 784:
case 2898:
case 2961:
case 2811:
case 3125:
case 2749:
case 3565:
case 2645:
case 3869:
case 3919:
case 1519:
case 2715:
case 155:
case 548:
case 2937:
case 2044:
case 789:
case 1691:
case 1656:
case 2848:
case 1170:
case 1802:
case 1618:
case 2385:
case 2089:
case 1595:
case 2799:
case 3637:
case 1381:
case 80:
case 3280:
case 3238:
case 1254:
case 3768:
case 2556:
case 3102:
case 3199:
case 1012:
case 2324:
case 3973:
case 3362:
case 667:
case 2673:
case 2437:
case 2308:
case 1227:
case 848:
case 3495:
case 1465:
case 1529:
case 3149:
case 2377:
case 3929:
case 2203:
case 345:
case 3184:
case 1682:
case 1676:
case 1150:
case 3115:
case 1392:
case 2821:
case 1005:
case 2576:
case 2629:
case 3453:
case 453:
case 620:
case 3445:
case 730:
case 589:
case 932:
case 3501:
case 475:
case 950:
case 816:
case 830:
case 1494:
case 2488:
case 3082:
case 1762:
case 2422:
case 4085:
case 1232:
case 2370:
case 3464:
case 3028:
case 2862:
case 2912:
case 1157:
case 3004:
case 3808:
case 1114:
case 3275:
case 1444:
case 3742:
case 3322:
case 3470:
case 2364:
case 117:
case 99:
case 2104:
case 3718:
case 3247:
case 407:
case 2837:
case 799:
case 888:
case 328:
case 1902:
case 1668:
case 4073:
case 908:
case 2128:
case 103:
case 3515:
case 527:
case 3819:
case 3969:
case 3698:
case 413:
case 2:
case 2765:
case 3297:
case 6:
case 3853:
case 3549:
case 961:
case 1129:
case 1033:
case 1984:
case 3950:
case 3330:
case 1231:
case 1550:
case 2421:
case 1761:
case 3584:
case 712:
case 693:
case 293:
case 3633:
case 910:
case 2015:
case 3240:
case 725:
case 2319:
case 1341:
case 894:
case 1894:
case 1788:
case 2794:
case 1213:
case 2933:
case 1730:
case 1011:
case 812:
case 2353:
case 1936:
case 2216:
case 1318:
case 511:
case 1514:
case 2657:
case 2581:
case 3424:
case 1391:
case 3290:
case 3914:
case 1356:
case 899:
case 2099:
case 2789:
case 2002:
case 3408:
case 1557:
case 2614:
case 2542:
case 727:
case 1164:
case 3908:
case 3662:
case 849:
case 3485:
case 1508:
case 3457:
case 594:
case 1712:
case 2812:
case 2608:
case 2962:
case 3189:
case 1642:
case 512:
case 1524:
case 1436:
case 2207:
case 1328:
case 2226:
case 2509:
case 1705:
case 1376:
case 2278:
case 2433:
case 2677:
case 57:
case 2329:
case 599:
case 2701:
case 760:
case 243:
case 643:
case 3977:
case 2411:
case 711:
case 4019:
case 2921:
case 3776:
case 744:
case 1119:
case 2498:
case 1484:
case 1415:
case 1145:
case 2200:
case 2118:
case 1499:
case 827:
case 3042:
case 525:
case 387:
case 2156:
case 2448:
case 3728:
case 1570:
case 1062:
case 3873:
case 3312:
case 3970:
case 11:
case 997:
case 4034:
case 1006:
case 1779:
case 3116:
case 40:
case 1571:
case 1807:
case 1826:
case 2726:
case 2707:
case 1675:
case 3971:
case 1723:
case 2823:
case 52:
case 1205:
case 2140:
case 3496:
case 1878:
case 3620:
case 282:
case 945:
case 646:
case 172:
case 3282:
case 1020:
case 190:
case 350:
case 3135:
case 3323:
case 484:
case 1800:
case 2700:
case 1903:
case 4072:
case 1186:
case 3674:
case 575:
case 2906:
case 2417:
case 3075:
case 3204:
case 3379:
case 3606:
case 3228:
case 2454:
case 3093:
case 3291:
case 2334:
case 2580:
case 2066:
case 2538:
case 309:
case 1638:
case 2406:
case 1767:
case 2867:
case 1237:
case 3055:
case 3359:
case 3087:
case 416:
case 1340:
case 3939:
case 753:
case 1403:
case 106:
case 304:
case 3872:
case 2474:
case 1261:
case 3360:
case 452:
case 1063:
case 140:
case 2651:
case 2696:
case 1759:
case 2555:
case 281:
case 2859:
case 296:
case 3610:
case 681:
case 1655:
case 1643:
case 1760:
case 654:
case 1596:
case 1230:
case 2372:
case 2294:
case 2860:
case 366:
case 169:
case 1858:
case 3566:
case 3790:
case 3038:
case 38:
case 2593:
case 448:
case 259:
case 138:
case 1017:
case 2020:
case 1197:
case 2800:
case 474:
case 3229:
case 3131:
case 907:
case 327:
case 585:
case 3527:
case 49:
case 408:
case 479:
case 3752:
case 3071:
case 2032:
case 118:
case 3438:
case 3480:
case 4090:
case 61:
case 2027:
case 2779:
case 21:
case 1190:
case 2134:
case 3975:
case 1671:
case 349:
case 563:
case 1707:
case 1726:
case 2466:
case 100:
case 311:
case 1823:
case 1410:
case 1140:
case 410:
case 2205:
case 2074:
case 1778:
case 3113:
case 182:
case 3160:
case 3455:
case 1201:
case 3300:
case 3487:
case 664:
case 264:
case 1651:
case 3840:
case 356:
case 271:
case 671:
case 3039:
case 3123:
case 1587:
case 3335:
case 1543:
case 394:
case 2655:
case 3510:
case 2643:
case 2596:
case 312:
case 1963:
case 1420:
case 1294:
case 1860:
case 1910:
case 2713:
case 2230:
case 1646:
case 669:
case 3993:
case 1758:
case 2222:
case 2347:
case 2383:
case 2816:
case 2966:
case 3475:
case 399:
case 1289:
case 2693:
case 2546:
case 159:
case 2017:
case 638:
case 3666:
case 3847:
case 13:
case 3980:
case 3316:
case 3358:
case 2390:
case 3517:
case 2638:
case 2680:
case 828:
case 2237:
case 1917:
case 1867:
case 462:
case 3897:
case 2539:
case 2835:
case 1265:
case 905:
case 2340:
case 325:
case 2403:
case 206:
case 3786:
case 3051:
case 1474:
case 2261:
case 1831:
case 2063:
case 3245:
case 193:
case 221:
case 731:
case 2259:
case 3069:
case 353:
case 135:
case 1319:
case 2341:
case 1888:
case 3409:
case 1830:
case 3050:
case 1794:
case 2788:
case 2213:
case 1049:
case 1345:
case 3533:
case 3981:
case 1216:
case 2318:
case 2936:
case 2514:
case 32:
case 1657:
case 90:
case 1581:
case 3234:
case 2356:
case 1462:
case 497:
case 3636:
case 2681:
case 709:
case 2585:
case 1002:
case 2557:
case 1614:
case 1395:
case 4004:
case 217:
case 3891:
case 1104:
case 3602:
case 3968:
case 3699:
case 78:
case 809:
case 2173:
case 878:
case 1948:
case 4028:
case 3344:
case 532:
case 2902:
case 2668:
case 3548:
case 1128:
case 375:
case 1182:
case 1650:
case 2865:
case 2915:
case 2425:
case 2569:
case 4082:
case 1:
case 4076:
case 3753:
case 2033:
case 1998:
case 1911:
case 3615:
case 766:
case 3272:
case 2761:
case 2449:
case 1411:
case 1921:
case 930:
case 916:
case 850:
case 2119:
case 1498:
case 3876:
case 615:
case 509:
case 2415:
case 578:
case 2153:
case 3301:
case 424:
case 3729:
case 2145:
case 2402:
case 3804:
case 2499:
case 531:
case 3008:
case 377:
case 4018:
case 1191:
case 1670:
case 1156:
case 3468:
case 2062:
case 2570:
case 3137:
case 1624:
case 948:
case 1542:
case 137:
case 3942:
case 2279:
case 2304:
case 2712:
case 2436:
case 2642:
case 1226:
case 3070:
case 1509:
case 2705:
case 1278:
case 1805:
case 495:
case 2021:
case 1677:
case 1329:
case 1701:
case 1025:
case 2577:
case 3130:
case 2609:
case 3188:
case 2692:
case 622:
case 732:
case 222:
case 3380:
case 1281:
case 3866:
case 3338:
case 3426:
case 3534:
case 2893:
case 1934:
case 1083:
case 3958:
case 1047:
case 1793:
case 2990:
case 35:
case 418:
case 2746:
case 1317:
case 179:
case 1846:
case 2132:
case 1660:
case 903:
case 376:
case 1755:
case 2887:
case 3763:
case 3233:
case 3710:
case 2796:
case 2072:
case 765:
case 1851:
case 3640:
case 684:
case 1896:
case 301:
case 3343:
case 3059:
case 3387:
case 1839:
case 110:
case 3400:
case 3935:
case 1631:
case 2531:
case 1103:
case 3060:
case 2250:
case 334:
case 3013:
case 3298:
case 3211:
case 1986:
case 1310:
case 865:
case 3697:
case 1363:
case 520:
case 1667:
case 3393:
case 60:
case 2127:
case 20:
case 1452:
case 1268:
case 2838:
case 2034:
case 2983:
case 3717:
case 339:
case 3248:
case 2567:
case 298:
case 3683:
case 3706:
case 867:
case 1952:
case 459:
case 2117:
case 2270:
case 1332:
case 820:
case 1486:
case 3221:
case 1320:
case 3139:
case 3435:
case 454:
case 1500:
case 302:
case 922:
case 216:
case 3720:
case 616:
case 1374:
case 915:
case 2303:
case 252:
case 2440:
case 652:
case 2110:
case 2163:
case 2277:
case 1775:
case 2579:
case 4066:
case 2208:
case 1327:
case 2875:
case 1242:
case 1166:
case 2626:
case 2052:
case 2224:
case 2771:
case 2490:
case 3146:
case 1871:
case 1526:
case 3458:
case 3262:
case 1679:
case 3926:
case 14:
case 3907:
case 3206:
case 1495:
case 3227:
case 197:
case 357:
case 3628:
case 3342:
case 1870:
case 2148:
case 2491:
case 2456:
case 719:
case 4002:
case 2770:
case 3012:
case 2928:
case 1102:
case 2418:
case 2976:
case 3169:
case 435:
case 1445:
case 4015:
case 870:
case 3392:
case 1115:
case 493:
case 3309:
case 3682:
case 2441:
case 145:
case 1184:
case 714:
case 558:
case 1929:
case 4084:
case 792:
case 3465:
case 2111:
case 1149:
case 3220:
case 1321:
case 2505:
case 1709:
case 1076:
case 1792:
case 2892:
case 213:
case 770:
case 2133:
case 2325:
case 56:
case 1605:
case 841:
case 591:
case 1136:
case 542:
case 3444:
case 3489:
case 3114:
case 2708:
case 2512:
case 3157:
case 819:
case 1464:
case 3232:
case 1028:
case 1824:
case 1814:
case 3564:
case 1091:
case 1056:
case 3368:
case 2644:
case 3836:
case 3989:
case 758:
case 86:
case 1544:
case 1589:
case 2757:
case 3037:
case 1243:
case 205:
case 373:
case 906:
case 2315:
case 1688:
case 326:
case 2251:
case 1398:
case 2296:
case 2530:
case 3177:
case 3263:
case 2045:
case 3994:
case 2053:
case 3210:
case 2349:
case 1311:
case 3733:
case 3519:
case 791:
case 2239:
case 971:
case 1919:
case 195:
case 1869:
case 1429:
case 1565:
case 3711:
case 3553:
case 443:
case 3641:
case 1850:
case 1945:
case 2476:
case 3884:
case 3798:
case 2750:
case 3088:
case 2428:
case 3381:
case 3022:
case 1280:
case 3254:
case 1238:
case 570:
case 1637:
case 76:
case 2537:
case 3691:
case 147:
case 3656:
case 938:
case 3217:
case 2076:
case 2082:
case 1505:
case 3488:
case 3430:
case 1892:
case 3905:
case 780:
case 1601:
case 2501:
case 1133:
case 2877:
case 1029:
case 4033:
case 2742:
case 523:
case 107:
case 3181:
case 1842:
case 2004:
case 1073:
case 2028:
case 3862:
case 1271:
case 2824:
case 918:
case 2495:
case 297:
case 3437:
case 3673:
case 3504:
case 1904:
case 2362:
case 1456:
case 1491:
case 1770:
case 2973:
case 3324:
case 1928:
case 2199:
case 1982:
case 2445:
case 900:
case 2453:
case 3576:
case 3582:
case 3461:
case 2115:
case 2419:
case 2184:
case 1198:
case 539:
case 3377:
case 3725:
case 3541:
case 633:
case 723:
case 295:
case 1239:
case 996:
case 2565:
case 422:
case 2125:
case 2333:
case 1665:
case 3961:
case 954:
case 3898:
case 2850:
case 2945:
case 2953:
case 2768:
case 1428:
case 3591:
case 2280:
case 1991:
case 868:
case 1956:
case 2637:
case 580:
case 3357:
case 3799:
case 3089:
case 3702:
case 3385:
case 1537:
case 839:
case 1404:
case 647:
case 247:
case 3937:
case 3412:
case 2018:
case 3922:
case 1714:
case 2781:
case 2056:
case 3736:
case 3142:
case 1644:
case 1522:
case 1881:
case 3266:
case 629:
case 1246:
case 739:
case 1162:
case 2622:
case 2857:
case 2589:
case 1785:
case 1302:
case 2885:
case 1399:
case 1757:
case 2255:
case 876:
case 3065:
case 1019:
case 2041:
case 1694:
case 2688:
case 3192:
case 2630:
case 3109:
case 2398:
case 1296:
case 3405:
case 224:
case 1588:
case 1530:
case 3833:
case 3930:
case 1053:
case 3988:
case 1349:
case 2311:
case 2535:
case 993:
case 4074:
case 610:
case 3597:
case 210:
case 236:
case 3686:
case 935:
case 1997:
case 1250:
case 3351:
case 2972:
case 2986:
case 3249:
case 472:
case 2363:
case 3016:
case 2667:
case 10:
case 3547:
case 1127:
case 1838:
case 1880:
case 1034:
case 2780:
case 2090:
case 1947:
case 3967:
case 3202:
case 3299:
case 3236:
case 3766:
case 29:
case 1893:
case 1990:
case 3175:
case 2934:
case 2083:
case 4032:
case 2317:
case 279:
case 608:
case 208:
case 679:
case 2846:
case 3634:
case 1132:
case 1658:
case 755:
case 3035:
case 1887:
case 1559:
case 873:
case 490:
case 1940:
case 2743:
case 661:
case 2659:
case 3810:
case 3863:
case 274:
case 1086:
case 1751:
case 674:
case 1072:
case 2896:
case 184:
case 3187:
case 130:
case 3923:
case 2292:
case 116:
case 3820:
case 262:
case 1303:
case 152:
case 440:
case 1440:
case 1110:
case 341:
case 2623:
case 3459:
case 392:
case 1163:
case 1579:
case 2306:
case 1208:
case 3979:
case 573:
case 757:
case 1224:
case 1771:
case 1052:
case 2507:
case 555:
case 3180:
case 1154:
case 3138:
case 937:
case 4054:
case 3827:
case 3806:
case 438:
case 4017:
case 1447:
case 1117:
case 3026:
case 3371:
case 3874:
case 2486:
case 3431:
case 471:
case 464:
case 1600:
case 3225:
case 943:
case 266:
case 3294:
case 3860:
case 3372:
case 112:
case 354:
case 3963:
case 3420:
case 1510:
case 402:
case 1563:
case 194:
case 2996:
case 1123:
case 2740:
case 156:
case 703:
case 821:
case 480:
case 2178:
case 3651:
case 1955:
case 1666:
case 359:
case 199:
case 1475:
case 3289:
case 2946:
case 3593:
case 17:
case 28:
case 68:
case 3716:
case 4079:
case 1993:
case 2790:
case 2080:
case 3758:
case 2566:
case 1734:
case 3432:
case 1890:
case 1264:
case 3427:
case 1295:
case 3406:
case 188:
case 1046:
case 278:
case 678:
case 1554:
case 2617:
case 3066:
case 3580:
case 3334:
case 2256:
case 1358:
case 2291:
case 1980:
case 1938:
case 817:
case 3954:
case 1847:
case 1883:
case 1253:
case 2360:
case 2872:
case 1772:
case 1786:
case 983:
case 125:
case 1219:
case 631:
case 231:
case 2797:
case 2043:
case 2359:
case 1897:
case 2055:
case 3735:
case 2674:
case 632:
case 4031:
case 1229:
case 3700:
case 160:
case 2439:
case 2135:
case 815:
case 250:
case 3197:
case 1574:
case 2276:
case 1378:
case 2282:
case 4067:
case 1438:
case 3454:
case 318:
case 1480:
case 2228:
case 1071:
case 1167:
case 1273:
case 2606:
case 2204:
case 2075:
case 1506:
case 3417:
case 3906:
case 127:
case 1493:
case 3932:
case 439:
case 3726:
case 967:
case 3190:
case 3671:
case 468:
case 3575:
case 346:
case 1160:
case 2620:
case 401:
case 2496:
case 2451:
case 1520:
case 1159:
case 111:
case 3823:
case 2525:
case 1729:
case 992:
case 2829:
case 914:
case 2621:
case 772:
case 1161:
case 2305:
case 2450:
case 1882:
case 2009:
case 2782:
case 2776:
case 1625:
case 890:
case 426:
case 1773:
case 1137:
case 1828:
case 919:
case 1252:
case 3191:
case 687:
case 3156:
case 287:
case 3670:
case 506:
case 177:
case 1804:
case 1562:
case 2144:
case 1481:
case 2414:
case 2189:
case 3962:
case 3812:
case 3373:
case 1942:
case 571:
case 2908:
case 2662:
case 81:
case 564:
case 3542:
case 538:
case 1130:
case 343:
case 1188:
case 3025:
case 872:
case 3701:
case 3329:
case 455:
case 1992:
case 970:
case 3278:
case 790:
case 3805:
case 3509:
case 3592:
case 740:
case 2101:
case 1533:
case 3353:
case 3933:
case 3794:
case 663:
case 3830:
case 1105:
case 3319:
case 3015:
case 1069:
case 2477:
case 2633:
case 51:
case 864:
case 393:
case 1365:
case 3614:
case 1112:
case 838:
case 2337:
case 4012:
case 3744:
case 572:
case 1636:
case 958:
case 2985:
case 1442:
case 1234:
case 2914:
case 2864:
case 3581:
case 3822:
case 3657:
case 12:
case 3685:
case 1981:
case 3128:
case 628:
case 1344:
case 228:
case 1057:
case 2895:
case 96:
case 1389:
case 3948:
case 3837:
case 1085:
case 2502:
case 2599:
case 1014:
case 2247:
case 1818:
case 3104:
case 1699:
case 2648:
case 3364:
case 769:
case 2470:
case 2791:
case 2756:
case 1598:
case 2584:
case 1615:
case 2388:
case 1394:
case 3911:
case 2330:
case 3669:
case 2845:
case 2950:
case 3998:
case 2549:
case 1511:
case 2297:
case 3765:
case 771:
case 806:
case 3:
case 1649:
case 2611:
case 1684:
case 2698:
case 685:
case 3182:
case 2969:
case 3176:
case 2819:
case 1841:
case 3650:
case 1719:
case 2741:
case 986:
case 2070:
case 3328:
case 1144:
case 1189:
case 4044:
case 3712:
case 3508:
case 581:
case 596:
case 3304:
case 1485:
case 2942:
case 3164:
case 2122:
case 1977:
case 3692:
case 3609:
case 559:
case 465:
case 3801:
case 882:
case 980:
case 3223:
case 3021:
case 800:
case 3705:
case 2729:
case 2077:
case 2301:
case 1829:
case 782:
case 1621:
case 3925:
case 3484:
case 3119:
case 1092:
case 3449:
case 53:
case 818:
case 1312:
case 3195:
case 2773:
case 2137:
case 3570:
case 3062:
case 2252:
case 2024:
case 1042:
case 677:
case 277:
case 2008:
case 1704:
case 3499:
case 759:
case 3999:
case 2057:
case 1895:
case 3267:
case 2085:
case 1502:
case 3173:
case 1283:
case 1247:
case 2968:
case 1470:
case 2856:
case 317:
case 1648:
case 1756:
case 1081:
case 754:
case 3761:
case 1330:
case 3231:
case 2615:
case 2394:
case 1388:
case 3984:
case 2753:
case 1950:
case 1549:
case 3129:
case 1297:
case 3569:
case 796:
case 2649:
case 1969:
case 1819:
case 2841:
case 2684:
case 675:
case 275:
case 2719:
case 1515:
case 1101:
case 3011:
case 3213:
case 4001:
case 3788:
case 2050:
case 3098:
case 3730:
case 2492:
case 420:
case 881:
case 896:
case 253:
case 653:
case 1633:
case 3259:
case 901:
case 467:
case 3557:
case 2112:
case 1957:
case 546:
case 939:
case 3048:
case 1985:
case 3844:
case 2636:
case 582:
case 1914:
case 3391:
case 1290:
case 1068:
case 1536:
case 62:
case 73:
case 22:
case 3514:
case 3936:
case 3767:
case 288:
case 688:
case 178:
case 2554:
case 2358:
case 1747:
case 1093:
case 2980:
case 2883:
case 1100:
case 340:
case 3063:
case 1360:
case 104:
case 3731:
case 2096:
case 2772:
case 926:
case 306:
case 8:
case 1241:
case 2219:
case 735:
case 1043:
case 793:
case 1087:
case 3835:
case 3539:
case 2897:
case 1331:
case 3288:
case 612:
case 3551:
case 2510:
case 694:
case 1996:
case 3655:
case 1610:
case 835:
case 2039:
case 4078:
case 3759:
case 371:
case 3397:
case 470:
case 537:
case 2955:
case 893:
case 2666:
case 1126:
case 1107:
case 3693:
case 4026:
case 1946:
case 4007:
case 299:
case 2475:
case 27:
case 3816:
case 3383:
case 3347:
case 18:
case 2734:
case 1038:
case 1790:
case 369:
case 3858:
case 2493:
case 458:
case 1971:
case 3807:
case 3571:
case 3826:
case 4016:
case 535:
case 1632:
case 3134:
case 957:
case 1116:
case 837:
case 3006:
case 31:
case 593:
case 3027:
case 3779:
case 2443:
case 2487:
case 843:
case 2160:
case 2113:
case 3074:
case 2520:
case 1451:
case 244:
case 3878:
case 1496:
case 611:
case 3723:
case 743:
case 3172:
case 3903:
case 660:
case 3800:
case 486:
case 1323:
case 491:
case 442:
case 150:
case 2574:
case 2603:
case 390:
case 1282:
case 3020:
case 1276:
case 2071:
case 3032:
case 46:
case 1228:
case 2326:
case 1606:
case 1627:
case 1204:
case 1075:
case 227:
case 737:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753930802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,];
var gg_b = "1753930802/";

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
