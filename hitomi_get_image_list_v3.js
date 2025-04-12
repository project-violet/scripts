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
case 3696:
case 2398:
case 2848:
case 1025:
case 1143:
case 2762:
case 2786:
case 2132:
case 2175:
case 1149:
case 1789:
case 327:
case 2100:
case 2701:
case 3314:
case 894:
case 349:
case 3650:
case 473:
case 3871:
case 3404:
case 1710:
case 1886:
case 1:
case 2496:
case 1862:
case 3736:
case 691:
case 733:
case 3321:
case 725:
case 2007:
case 3715:
case 3742:
case 2276:
case 2961:
case 1748:
case 1273:
case 6:
case 2883:
case 4007:
case 3868:
case 1050:
case 1985:
case 2093:
case 1351:
case 966:
case 269:
case 683:
case 944:
case 1096:
case 3154:
case 832:
case 378:
case 183:
case 469:
case 2099:
case 3625:
case 706:
case 2604:
case 2362:
case 3624:
case 206:
case 3688:
case 2605:
case 1446:
case 2663:
case 3922:
case 3583:
case 1432:
case 1389:
case 3155:
case 2449:
case 4000:
case 2798:
case 1383:
case 3589:
case 1984:
case 1011:
case 1666:
case 1654:
case 1267:
case 425:
case 2817:
case 2457:
case 1310:
case 164:
case 1043:
case 433:
case 2046:
case 233:
case 2075:
case 2032:
case 2244:
case 664:
case 1049:
case 1898:
case 2424:
case 2488:
case 1627:
case 1348:
case 3463:
case 1536:
case 1515:
case 1542:
case 1196:
case 861:
case 773:
case 3336:
case 3548:
case 2638:
case 3315:
case 2199:
case 39:
case 3256:
case 3892:
case 2533:
case 3643:
case 3987:
case 716:
case 872:
case 2223:
case 568:
case 2107:
case 543:
case 1088:
case 1717:
case 3290:
case 1226:
case 1150:
case 1573:
case 2759:
case 3485:
case 1221:
case 3373:
case 182:
case 3974:
case 2545:
case 3635:
case 3030:
case 3616:
case 2318:
case 755:
case 833:
case 507:
case 3331:
case 3217:
case 806:
case 2920:
case 732:
case 21:
case 3999:
case 3360:
case 3251:
case 1531:
case 1008:
case 385:
case 1764:
case 341:
case 41:
case 1134:
case 150:
case 1560:
case 3394:
case 2306:
case 2685:
case 1309:
case 2158:
case 472:
case 1977:
case 4041:
case 3795:
case 1303:
case 1365:
case 461:
case 2864:
case 4013:
case 137:
case 923:
case 1630:
case 96:
case 1035:
case 1661:
case 1016:
case 2890:
case 637:
case 794:
case 2122:
case 2013:
case 1441:
case 357:
case 2381:
case 2340:
case 980:
case 2955:
case 3137:
case 3773:
case 816:
case 2954:
case 873:
case 2087:
case 3102:
case 3556:
case 20:
case 1108:
case 2359:
case 542:
case 494:
case 1034:
case 40:
case 2239:
case 1970:
case 1215:
case 1356:
case 1364:
case 287:
case 2434:
case 1526:
case 1637:
case 487:
case 1390:
case 3564:
case 3130:
case 1840:
case 2491:
case 2523:
case 370:
case 2271:
case 517:
case 2347:
case 14:
case 3395:
case 2119:
case 432:
case 4022:
case 869:
case 1703:
case 232:
case 3178:
case 3283:
case 3037:
case 2141:
case 1422:
case 2180:
case 2927:
case 3634:
case 2544:
case 3932:
case 1797:
case 2058:
case 1938:
case 1567:
case 975:
case 774:
case 867:
case 3967:
case 2327:
case 2648:
case 3538:
case 3346:
case 3332:
case 2755:
case 1192:
case 1820:
case 3198:
case 3483:
case 1532:
case 1258:
case 2549:
case 156:
case 3995:
case 1777:
case 1704:
case 3410:
case 679:
case 336:
case 656:
case 566:
case 800:
case 3671:
case 1305:
case 1964:
case 1363:
case 2588:
case 2524:
case 1990:
case 1436:
case 2683:
case 2947:
case 1442:
case 522:
case 2366:
case 3799:
case 2439:
case 2382:
case 3774:
case 2354:
case 553:
case 2036:
case 234:
case 986:
case 2042:
case 148:
case 62:
case 289:
case 3707:
case 2877:
case 4036:
case 1956:
case 434:
case 1287:
case 3824:
case 2805:
case 197:
case 2863:
case 995:
case 1168:
case 2272:
case 734:
case 810:
case 1882:
case 2216:
case 3775:
case 2355:
case 2492:
case 708:
case 3101:
case 376:
case 1414:
case 2651:
case 184:
case 139:
case 3098:
case 1280:
case 1241:
case 2870:
case 639:
case 1965:
case 1304:
case 684:
case 1769:
case 2136:
case 3931:
case 2208:
case 1827:
case 1593:
case 792:
case 1139:
case 2320:
case 3994:
case 1599:
case 3843:
case 3692:
case 1133:
case 3417:
case 588:
case 3979:
case 3857:
case 474:
case 1507:
case 3451:
case 4021:
case 1770:
case 321:
case 3374:
case 893:
case 218:
case 2173:
case 1029:
case 3118:
case 2026:
case 3269:
case 2179:
case 3835:
case 1145:
case 1023:
case 3456:
case 1948:
case 3464:
case 171:
case 1587:
case 2131:
case 3936:
case 365:
case 2730:
case 3490:
case 2429:
case 523:
case 3644:
case 3387:
case 3942:
case 3270:
case 33:
case 210:
case 105:
case 2885:
case 4067:
case 1044:
case 2249:
case 907:
case 1558:
case 2067:
case 605:
case 3713:
case 1659:
case 818:
case 2243:
case 874:
case 767:
case 1802:
case 2778:
case 626:
case 2257:
case 3181:
case 98:
case 1830:
case 3140:
case 1467:
case 445:
case 2962:
case 3741:
case 2211:
case 1989:
case 3528:
case 3584:
case 960:
case 1200:
case 1647:
case 1983:
case 2852:
case 1479:
case 1385:
case 1606:
case 3159:
case 1917:
case 2296:
case 400:
case 781:
case 4060:
case 2031:
case 2508:
case 2603:
case 2060:
case 200:
case 2302:
case 793:
case 1431:
case 4079:
case 267:
case 1129:
case 2330:
case 2361:
case 1460:
case 3921:
case 3787:
case 575:
case 1274:
case 924:
case 1045:
case 131:
case 1076:
case 1494:
case 2884:
case 1207:
case 312:
case 1519:
case 3914:
case 3612:
case 2572:
case 3081:
case 3758:
case 501:
case 834:
case 1752:
case 3403:
case 1580:
case 115:
case 1728:
case 3834:
case 917:
case 3006:
case 3341:
case 3380:
case 3722:
case 3277:
case 2225:
case 3497:
case 2737:
case 808:
case 2811:
case 1261:
case 2417:
case 1614:
case 686:
case 3918:
case 318:
case 374:
case 221:
case 1800:
case 186:
case 2973:
case 3754:
case 948:
case 2374:
case 2399:
case 290:
case 3782:
case 1875:
case 3320:
case 2849:
case 736:
case 2285:
case 802:
case 2931:
case 1202:
case 1051:
case 2692:
case 2843:
case 1520:
case 3596:
case 1017:
case 1788:
case 1724:
case 3838:
case 3651:
case 213:
case 2504:
case 898:
case 3617:
case 3906:
case 956:
case 1711:
case 3870:
case 1325:
case 413:
case 2098:
case 1743:
case 1621:
case 1555:
case 1278:
case 2888:
case 3805:
case 3863:
case 83:
case 2775:
case 2732:
case 3355:
case 3216:
case 2746:
case 3235:
case 3727:
case 3940:
case 3981:
case 865:
case 3014:
case 2570:
case 3015:
case 389:
case 2707:
case 2774:
case 3354:
case 812:
case 1750:
case 154:
case 1151:
case 2825:
case 3471:
case 3804:
case 1117:
case 1554:
case 3689:
case 829:
case 1582:
case 2793:
case 1566:
case 3433:
case 847:
case 1923:
case 2448:
case 2569:
case 3121:
case 3683:
case 3382:
case 3366:
case 3524:
case 2563:
case 1796:
case 2410:
case 168:
case 436:
case 2995:
case 668:
case 1807:
case 143:
case 3511:
case 2086:
case 2300:
case 236:
case 558:
case 1401:
case 939:
case 392:
case 2332:
case 2489:
case 3755:
case 2375:
case 721:
case 2967:
case 851:
case 2538:
case 3327:
case 997:
case 1642:
case 1615:
case 2483:
case 3549:
case 403:
case 3468:
case 2198:
case 4001:
case 195:
case 1003:
case 160:
case 1660:
case 1631:
case 3998:
case 4006:
case 2497:
case 660:
case 2204:
case 1992:
case 18:
case 1694:
case 447:
case 1440:
case 550:
case 1481:
case 2722:
case 2409:
case 3516:
case 765:
case 1406:
case 2313:
case 1679:
case 2040:
case 3572:
case 2645:
case 3535:
case 2081:
case 2612:
case 582:
case 1578:
case 1316:
case 2319:
case 1673:
case 3250:
case 27:
case 803:
case 537:
case 2921:
case 3126:
case 2787:
case 2147:
case 1791:
case 1190:
case 3073:
case 3330:
case 251:
case 367:
case 1561:
case 4018:
case 3828:
case 47:
case 1734:
case 451:
case 1164:
case 1220:
case 3094:
case 1308:
case 599:
case 3852:
case 3445:
case 3296:
case 2159:
case 3412:
case 1418:
case 3603:
case 1858:
case 3060:
case 702:
case 3031:
case 1197:
case 2528:
case 2584:
case 890:
case 617:
case 528:
case 202:
case 2623:
case 2181:
case 1968:
case 1537:
case 3095:
case 54:
case 402:
case 1165:
case 1772:
case 3885:
case 751:
case 2358:
case 3778:
case 393:
case 2552:
case 142:
case 3901:
case 2106:
case 3067:
case 77:
case 1933:
case 1334:
case 3194:
case 124:
case 3591:
case 3423:
case 465:
case 1939:
case 1447:
case 2915:
case 2942:
case 3761:
case 2490:
case 1841:
case 4059:
case 1880:
case 2936:
case 3131:
case 2053:
case 3702:
case 298:
case 2118:
case 2047:
case 3026:
case 1695:
case 2263:
case 1813:
case 2205:
case 1453:
case 859:
case 2816:
case 747:
case 1266:
case 1971:
case 2456:
case 498:
case 1064:
case 1459:
case 729:
case 556:
case 2082:
case 3571:
case 983:
case 3223:
case 1454:
case 666:
case 3174:
case 1069:
case 1814:
case 2470:
case 4066:
case 438:
case 4082:
case 1371:
case 579:
case 166:
case 1600:
case 920:
case 3229:
case 1063:
case 1632:
case 1675:
case 3193:
case 991:
case 1934:
case 2649:
case 3539:
case 2405:
case 3424:
case 1253:
case 4054:
case 2463:
case 2256:
case 2342:
case 727:
case 2987:
case 857:
case 1991:
case 2054:
case 2469:
case 619:
case 153:
case 3411:
case 3817:
case 1501:
case 3075:
case 3670:
case 333:
case 2958:
case 119:
case 3244:
case 2714:
case 52:
case 3301:
case 325:
case 830:
case 1821:
case 3937:
case 2583:
case 3449:
case 2155:
case 3568:
case 622:
case 2624:
case 3605:
case 3362:
case 778:
case 3663:
case 1427:
case 2589:
case 3443:
case 1586:
case 1562:
case 841:
case 3798:
case 122:
case 3669:
case 3810:
case 1170:
case 414:
case 958:
case 2551:
case 214:
case 2154:
case 896:
case 1739:
case 3007:
case 3889:
case 2321:
case 597:
case 3276:
case 2742:
case 1420:
case 3245:
case 1169:
case 3074:
case 1733:
case 1105:
case 1163:
case 2055:
case 3978:
case 373:
case 249:
case 3701:
case 227:
case 3100:
case 316:
case 79:
case 2913:
case 1607:
case 4055:
case 2297:
case 3425:
case 1240:
case 2477:
case 1281:
case 1972:
case 2919:
case 609:
case 1768:
case 2833:
case 3592:
case 3398:
case 1206:
case 3848:
case 1815:
case 2265:
case 3132:
case 3175:
case 870:
case 3786:
case 1836:
case 2941:
case 3146:
case 66:
case 2634:
case 1949:
case 571:
case 3544:
case 1437:
case 1860:
case 180:
case 3740:
case 3927:
case 3781:
case 355:
case 3141:
case 1831:
case 1687:
case 16:
case 2428:
case 2484:
case 1052:
case 1201:
case 4037:
case 741:
case 1084:
case 785:
case 496:
case 2395:
case 1286:
case 1262:
case 2178:
case 3268:
case 878:
case 814:
case 2283:
case 999:
case 3022:
case 652:
case 2900:
case 2794:
case 470:
case 1547:
case 2590:
case 1622:
case 387:
case 1323:
case 3529:
case 3271:
case 2760:
case 3897:
case 3347:
case 3628:
case 526:
case 3684:
case 611:
case 3491:
case 1329:
case 3087:
case 982:
case 3809:
case 30:
case 2102:
case 3652:
case 1559:
case 3353:
case 2773:
case 3803:
case 3239:
case 1658:
case 1776:
case 3865:
case 1712:
case 1185:
case 3359:
case 2597:
case 1744:
case 3019:
case 3864:
case 1581:
case 540:
case 175:
case 2078:
case 89:
case 2137:
case 3122:
case 3013:
case 2829:
case 361:
case 838:
case 2503:
case 3158:
case 2565:
case 2608:
case 3685:
case 372:
case 2509:
case 1925:
case 3292:
case 3416:
case 1152:
case 3472:
case 2795:
case 796:
case 3920:
case 31:
case 441:
case 1867:
case 1430:
case 430:
case 2844:
case 4002:
case 1085:
case 1680:
case 928:
case 241:
case 1518:
case 4061:
case 2485:
case 3759:
case 1613:
case 4030:
case 1345:
case 101:
case 2616:
case 2907:
case 3545:
case 2672:
case 2030:
case 3512:
case 4003:
case 629:
case 2694:
case 28:
case 460:
case 4065:
case 2009:
case 2992:
case 2887:
case 1204:
case 2481:
case 1277:
case 1722:
case 1891:
case 1380:
case 1006:
case 1341:
case 260:
case 4009:
case 981:
case 3144:
case 48:
case 1834:
case 129:
case 3728:
case 2631:
case 3541:
case 3580:
case 854:
case 2255:
case 3618:
case 2335:
case 612:
case 724:
case 2673:
case 1758:
case 2097:
case 1409:
case 993:
case 1040:
case 1313:
case 2679:
case 112:
case 3207:
case 2734:
case 2561:
case 3640:
case 2530:
case 3123:
case 2164:
case 3274:
case 742:
case 1018:
case 2791:
case 2822:
case 3431:
case 843:
case 3299:
case 868:
case 717:
case 1159:
case 3606:
case 3983:
case 2537:
case 3647:
case 3328:
case 2626:
case 2968:
case 217:
case 3200:
case 1629:
case 3522:
case 3989:
case 1528:
case 1741:
case 1623:
case 1780:
case 1140:
case 3467:
case 1181:
case 417:
case 1358:
case 3802:
case 2109:
case 1238:
case 1106:
case 3910:
case 3558:
case 2716:
case 2103:
case 1719:
case 50:
case 2735:
case 3495:
case 2772:
case 2227:
case 305:
case 1915:
case 1270:
case 967:
case 1387:
case 424:
case 2939:
case 4056:
case 2880:
case 2841:
case 707:
case 2933:
case 2334:
case 1059:
case 665:
case 2254:
case 2667:
case 1464:
case 698:
case 1816:
case 2282:
case 4090:
case 3145:
case 1872:
case 1269:
case 1047:
case 2090:
case 1263:
case 78:
case 1307:
case 1374:
case 286:
case 934:
case 2261:
case 2976:
case 3171:
case 1451:
case 795:
case 2614:
case 621:
case 3574:
case 1979:
case 2230:
case 1417:
case 3133:
case 1843:
case 1692:
case 2051:
case 1994:
case 3599:
case 3705:
case 2148:
case 2017:
case 4051:
case 190:
case 1960:
case 3593:
case 2832:
case 3421:
case 3827:
case 743:
case 1285:
case 2396:
case 3903:
case 3304:
case 159:
case 2110:
case 3965:
case 3280:
case 676:
case 1504:
case 3909:
case 339:
case 113:
case 569:
case 1700:
case 3882:
case 3997:
case 2749:
case 2189:
case 2278:
case 2555:
case 2621:
case 2498:
case 3738:
case 397:
case 1888:
case 3287:
case 525:
case 363:
case 2151:
case 3601:
case 2117:
case 2554:
case 454:
case 974:
case 4048:
case 1774:
case 1799:
case 3855:
case 3415:
case 1563:
case 2929:
case 2566:
case 506:
case 1448:
case 3363:
case 1569:
case 3686:
case 2324:
case 4083:
case 1671:
case 468:
case 2089:
case 379:
case 243:
case 1228:
case 136:
case 1086:
case 1062:
case 1850:
case 3068:
case 268:
case 2311:
case 2237:
case 2725:
case 2083:
case 1410:
case 3704:
case 3777:
case 2357:
case 3222:
case 356:
case 3500:
case 1639:
case 603:
case 3532:
case 2642:
case 3258:
case 3575:
case 3338:
case 2636:
case 2527:
case 1198:
case 4010:
case 103:
case 2899:
case 2486:
case 1896:
case 26:
case 2894:
case 223:
case 1484:
case 2943:
case 701:
case 2344:
case 1691:
case 510:
case 2201:
case 2052:
case 235:
case 377:
case 3938:
case 280:
case 961:
case 1210:
case 1932:
case 1634:
case 435:
case 2831:
case 1946:
case 972:
case 3709:
case 3818:
case 4028:
case 4084:
case 1900:
case 2873:
case 1289:
case 2028:
case 2084:
case 3116:
case 1876:
case 3765:
case 2286:
case 1812:
case 3172:
case 1845:
case 3135:
case 2262:
case 252:
case 1395:
case 696:
case 34:
case 581:
case 1326:
case 1161:
case 1760:
case 91:
case 3881:
case 1130:
case 3969:
case 3390:
case 1564:
case 411:
case 3637:
case 211:
case 1590:
case 3963:
case 3356:
case 2776:
case 3242:
case 775:
case 3034:
case 1779:
case 2553:
case 593:
case 3236:
case 3108:
case 1556:
case 1102:
case 2559:
case 1773:
case 1248:
case 3806:
case 1137:
case 3847:
case 3397:
case 955:
case 1829:
case 157:
case 3480:
case 2184:
case 2128:
case 1597:
case 3016:
case 3661:
case 2540:
case 337:
case 275:
case 657:
case 3602:
case 2925:
case 711:
case 3303:
case 500:
case 3859:
case 3419:
case 2152:
case 2478:
case 399:
case 1503:
case 2298:
case 3413:
case 1608:
case 987:
case 1993:
case 752:
case 350:
case 3560:
case 1394:
case 1844:
case 3134:
case 141:
case 3764:
case 3008:
case 185:
case 3531:
case 1251:
case 1002:
case 3594:
case 1999:
case 2461:
case 685:
case 2867:
case 4085:
case 2402:
case 1907:
case 1030:
case 1672:
case 90:
case 3579:
case 780:
case 1373:
case 2619:
case 853:
case 2376:
case 3756:
case 3678:
case 2950:
case 201:
case 723:
case 76:
case 444:
case 358:
case 1290:
case 969:
case 3024:
case 2005:
case 244:
case 466:
case 4005:
case 709:
case 4063:
case 2339:
case 4070:
case 1643:
case 2466:
case 1256:
case 104:
case 1548:
case 1336:
case 1469:
case 2259:
case 2934:
case 2333:
case 69:
case 2675:
case 3542:
case 3515:
case 1463:
case 3348:
case 3627:
case 453:
case 219:
case 973:
case 1714:
case 3400:
case 346:
case 2104:
case 3125:
case 253:
case 3310:
case 419:
case 534:
case 3267:
case 3654:
case 2177:
case 3666:
case 3011:
case 3928:
case 1438:
case 3432:
case 3389:
case 3475:
case 2427:
case 1624:
case 422:
case 3407:
case 114:
case 3294:
case 178:
case 3096:
case 614:
case 678:
case 2170:
case 3260:
case 3317:
case 1868:
case 823:
case 3493:
case 753:
case 2163:
case 3748:
case 3188:
case 1166:
case 1742:
case 1321:
case 880:
case 2169:
case 3862:
case 1297:
case 3710:
case 1871:
case 1404:
case 2607:
case 488:
case 3514:
case 2674:
case 627:
case 518:
case 3157:
case 288:
case 1055:
case 149:
case 933:
case 2392:
case 2455:
case 209:
case 3149:
case 4004:
case 2815:
case 2842:
case 2693:
case 1265:
case 1127:
case 744:
case 4077:
case 1941:
case 2836:
case 2598:
case 3025:
case 3620:
case 2699:
case 2768:
case 2077:
case 1696:
case 1753:
case 3619:
case 282:
case 2579:
case 1318:
case 3312:
case 1759:
case 3950:
case 2756:
case 2531:
case 3085:
case 250:
case 2134:
case 2191:
case 3996:
case 4008:
case 2790:
case 3729:
case 970:
case 529:
case 3461:
case 1920:
case 450:
case 2977:
case 1472:
case 728:
case 672:
case 2303:
case 172:
case 2853:
case 74:
case 1685:
case 1041:
case 1306:
case 2413:
case 1080:
case 996:
case 1158:
case 299:
case 3478:
case 1340:
case 161:
case 1381:
case 1013:
case 2480:
case 4016:
case 3826:
case 237:
case 375:
case 2035:
case 3540:
case 57:
case 3744:
case 2016:
case 3712:
case 2108:
case 2236:
case 2215:
case 2970:
case 1865:
case 2356:
case 3776:
case 2242:
case 1239:
case 1803:
case 1353:
case 3559:
case 1954:
case 2091:
case 2806:
case 1718:
case 10:
case 1809:
case 1233:
case 2881:
case 1491:
case 687:
case 1684:
case 1628:
case 24:
case 2487:
case 1271:
case 1966:
case 3924:
case 311:
case 941:
case 3547:
case 2637:
case 44:
case 1434:
case 228:
case 985:
case 1706:
case 1113:
case 883:
case 1268:
case 2818:
case 3262:
case 3957:
case 750:
case 2703:
case 2765:
case 3911:
case 2567:
case 53:
case 891:
case 323:
case 3894:
case 3687:
case 477:
case 1180:
case 1141:
case 1740:
case 1927:
case 957:
case 1058:
case 380:
case 782:
case 1544:
case 1762:
case 1786:
case 309:
case 3455:
case 2789:
case 1175:
case 3842:
case 1132:
case 3815:
case 1848:
case 3206:
case 3077:
case 2025:
case 3004:
case 2620:
case 828:
case 2143:
case 3768:
case 3699:
case 2514:
case 3935:
case 3972:
case 2710:
case 1425:
case 2111:
case 521:
case 116:
case 1978:
case 2273:
case 877:
case 291:
case 2124:
case 2655:
case 2050:
case 1883:
case 3169:
case 99:
case 1212:
case 2886:
case 904:
case 2862:
case 746:
case 1961:
case 4050:
case 1007:
case 3739:
case 938:
case 2474:
case 559:
case 1677:
case 1099:
case 2317:
case 1450:
case 1093:
case 3771:
case 2351:
case 1669:
case 2057:
case 322:
case 1798:
case 3562:
case 3586:
case 2011:
case 2928:
case 2295:
case 2446:
case 4057:
case 1605:
case 1386:
case 106:
case 1568:
case 1449:
case 1937:
case 2432:
case 2389:
case 4011:
case 949:
case 7:
case 2049:
case 927:
case 133:
case 1670:
case 4043:
case 1075:
case 446:
case 1457:
case 2654:
case 2267:
case 3177:
case 633:
case 2043:
case 2125:
case 353:
case 1851:
case 1638:
case 3991:
case 0:
case 3482:
case 2898:
case 1424:
case 2515:
case 3675:
case 2542:
case 1229:
case 2088:
case 2024:
case 366:
case 258:
case 2751:
case 3371:
case 2226:
case 3247:
case 4024:
case 3814:
case 3069:
case 1174:
case 978:
case 3459:
case 2023:
case 262:
case 3064:
case 3453:
case 1288:
case 3813:
case 2878:
case 1131:
case 3841:
case 1730:
case 2426:
case 1761:
case 3447:
case 897:
case 1423:
case 2948:
case 324:
case 25:
case 2659:
case 405:
case 1901:
case 193:
case 4044:
case 3109:
case 1885:
case 205:
case 2352:
case 2246:
case 2232:
case 731:
case 2044:
case 693:
case 317:
case 2200:
case 226:
case 570:
case 2384:
case 3626:
case 947:
case 2983:
case 2647:
case 3537:
case 1444:
case 3968:
case 645:
case 1962:
case 426:
case 2989:
case 1337:
case 3197:
case 1211:
case 2861:
case 1031:
case 1665:
case 100:
case 3858:
case 2293:
case 1060:
case 879:
case 3418:
case 1603:
case 856:
case 1852:
case 2385:
case 3308:
case 2299:
case 1609:
case 2045:
case 3164:
case 2274:
case 1079:
case 1828:
case 440:
case 1073:
case 2431:
case 2837:
case 4076:
case 1126:
case 965:
case 1361:
case 3335:
case 75:
case 3673:
case 771:
case 3316:
case 1572:
case 2519:
case 3679:
case 3406:
case 1516:
case 848:
case 1378:
case 3097:
case 415:
case 3440:
case 541:
case 3992:
case 585:
case 530:
case 3631:
case 215:
case 762:
case 3527:
case 2546:
case 831:
case 504:
case 59:
case 3343:
case 3944:
case 3010:
case 3615:
case 3642:
case 2258:
case 2575:
case 3462:
case 1543:
case 2820:
case 456:
case 1557:
case 913:
case 1511:
case 343:
case 3089:
case 2222:
case 538:
case 692:
case 2500:
case 256:
case 368:
case 3725:
case 2704:
case 2369:
case 3796:
case 3929:
case 1588:
case 739:
case 1366:
case 2855:
case 1947:
case 2415:
case 1720:
case 2662:
case 2305:
case 3388:
case 3324:
case 1433:
case 3566:
case 3048:
case 1877:
case 797:
case 634:
case 1471:
case 2956:
case 354:
case 3151:
case 263:
case 22:
case 3750:
case 448:
case 1354:
case 42:
case 463:
case 134:
case 921:
case 4033:
case 1042:
case 2219:
case 497:
case 1014:
case 1981:
case 903:
case 1727:
case 748:
case 1272:
case 2997:
case 3749:
case 72:
case 871:
case 763:
case 1805:
case 3278:
case 3743:
case 85:
case 3183:
case 862:
case 2241:
case 2280:
case 578:
case 2304:
case 2903:
case 4092:
case 1870:
case 3711:
case 2414:
case 1525:
case 239:
case 2092:
case 1838:
case 2705:
case 826:
case 3520:
case 2133:
case 2599:
case 3051:
case 3202:
case 3846:
case 779:
case 2698:
case 3396:
case 1320:
case 2139:
case 3875:
case 2421:
case 1115:
case 3800:
case 386:
case 174:
case 118:
case 1918:
case 2574:
case 3614:
case 2171:
case 3976:
case 674:
case 527:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744477201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,];
var gg_b = "1744477201/";

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
