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
case 3041:
case 1903:
case 664:
case 142:
case 1611:
case 1884:
case 2006:
case 952:
case 1755:
case 2319:
case 856:
case 1281:
case 519:
case 133:
case 794:
case 3823:
case 2908:
case 406:
case 643:
case 1285:
case 2576:
case 1751:
case 247:
case 2857:
case 2810:
case 3190:
case 469:
case 204:
case 3639:
case 632:
case 3926:
case 929:
case 967:
case 2084:
case 2346:
case 3503:
case 1318:
case 619:
case 3732:
case 3633:
case 980:
case 351:
case 3747:
case 874:
case 4088:
case 3416:
case 2940:
case 1938:
case 3430:
case 3161:
case 3734:
case 1036:
case 9:
case 1057:
case 3165:
case 216:
case 3305:
case 715:
case 903:
case 3640:
case 2511:
case 2626:
case 543:
case 1387:
case 1275:
case 2890:
case 2586:
case 248:
case 881:
case 3485:
case 1065:
case 1407:
case 1604:
case 774:
case 475:
case 2399:
case 2560:
case 1874:
case 322:
case 1061:
case 1469:
case 3359:
case 1872:
case 3888:
case 3481:
case 1547:
case 171:
case 585:
case 199:
case 1691:
case 1602:
case 1703:
case 2739:
case 3353:
case 2647:
case 64:
case 3551:
case 789:
case 2634:
case 3083:
case 386:
case 1377:
case 2129:
case 2861:
case 2468:
case 4023:
case 2248:
case 1216:
case 968:
case 4078:
case 3934:
case 2456:
case 3947:
case 894:
case 2740:
case 2264:
case 756:
case 611:
case 3932:
case 2444:
case 1398:
case 1230:
case 3314:
case 2401:
case 2808:
case 561:
case 2330:
case 2957:
case 1227:
case 3750:
case 2678:
case 1364:
case 354:
case 1362:
case 2545:
case 2910:
case 3446:
case 3452:
case 1102:
case 3266:
case 44:
case 1348:
case 2724:
case 2420:
case 3258:
case 3997:
case 2009:
case 899:
case 2839:
case 1803:
case 1628:
case 575:
case 2697:
case 2579:
case 2277:
case 181:
case 4047:
case 3610:
case 1293:
case 1195:
case 1673:
case 4032:
case 411:
case 865:
case 2067:
case 3978:
case 4034:
case 1470:
case 3413:
case 3636:
case 485:
case 2405:
case 115:
case 3419:
case 2765:
case 1435:
case 628:
case 918:
case 83:
case 2833:
case 1325:
case 1597:
case 1679:
case 1299:
case 1186:
case 2528:
case 661:
case 201:
case 2132:
case 1321:
case 3584:
case 2840:
case 1645:
case 1578:
case 2629:
case 2134:
case 675:
case 1906:
case 1867:
case 3622:
case 3493:
case 1974:
case 1855:
case 1683:
case 1782:
case 3139:
case 1784:
case 1972:
case 4026:
case 1213:
case 1115:
case 595:
case 3624:
case 506:
case 2990:
case 842:
case 879:
case 3797:
case 3344:
case 1111:
case 3086:
case 2924:
case 1254:
case 614:
case 2414:
case 2396:
case 2710:
case 2736:
case 3368:
case 569:
case 527:
case 1458:
case 3950:
case 1851:
case 833:
case 3337:
case 2218:
case 156:
case 73:
case 305:
case 2055:
case 3665:
case 1706:
case 3572:
case 884:
case 3832:
case 3231:
case 223:
case 432:
case 2459:
case 3002:
case 1517:
case 174:
case 627:
case 514:
case 799:
case 1550:
case 3499:
case 3661:
case 396:
case 2051:
case 1689:
case 443:
case 2351:
case 636:
case 610:
case 3302:
case 1206:
case 3148:
case 698:
case 308:
case 3229:
case 239:
case 956:
case 3395:
case 1558:
case 3735:
case 146:
case 2355:
case 1566:
case 335:
case 1719:
case 124:
case 3037:
case 1284:
case 70:
case 2666:
case 170:
case 3056:
case 3042:
case 3474:
case 1713:
case 3770:
case 3869:
case 1614:
case 212:
case 3125:
case 3980:
case 2787:
case 3044:
case 3278:
case 36:
case 536:
case 3698:
case 1282:
case 510:
case 1927:
case 2236:
case 1752:
case 1885:
case 3121:
case 867:
case 829:
case 117:
case 453:
case 974:
case 2210:
case 487:
case 3966:
case 2592:
case 2501:
case 697:
case 4007:
case 307:
case 2631:
case 1000:
case 1021:
case 326:
case 45:
case 2265:
case 344:
case 2445:
case 3552:
case 2520:
case 678:
case 3315:
case 2479:
case 3311:
case 2261:
case 80:
case 703:
case 915:
case 2441:
case 2848:
case 1816:
case 1830:
case 1168:
case 2635:
case 1570:
case 1308:
case 981:
case 1142:
case 1156:
case 2071:
case 3406:
case 1137:
case 350:
case 3766:
case 2043:
case 3519:
case 3217:
case 578:
case 2367:
case 2290:
case 3758:
case 752:
case 1535:
case 2224:
case 2918:
case 1952:
case 2473:
case 488:
case 4063:
case 2798:
case 27:
case 2428:
case 2821:
case 1274:
case 2169:
case 2016:
case 1048:
case 1333:
case 1620:
case 3618:
case 3484:
case 3482:
case 3970:
case 1478:
case 1871:
case 2777:
case 1064:
case 3376:
case 1601:
case 1793:
case 1272:
case 3963:
case 965:
case 2486:
case 258:
case 3585:
case 770:
case 1098:
case 1644:
case 2027:
case 1899:
case 1637:
case 313:
case 2135:
case 2460:
case 2131:
case 2240:
case 2764:
case 1322:
case 2748:
case 1716:
case 1447:
case 1390:
case 1569:
case 1432:
case 2762:
case 2663:
case 1996:
case 2721:
case 2491:
case 2898:
case 1827:
case 1563:
case 2208:
case 3389:
case 4035:
case 1192:
case 1775:
case 1361:
case 3858:
case 588:
case 2700:
case 3866:
case 497:
case 890:
case 3907:
case 1893:
case 2170:
case 121:
case 2568:
case 93:
case 4031:
case 2537:
case 1203:
case 2877:
case 1771:
case 2542:
case 2544:
case 168:
case 724:
case 1981:
case 3187:
case 349:
case 372:
case 152:
case 1087:
case 1916:
case 2948:
case 933:
case 3438:
case 979:
case 3571:
case 942:
case 3005:
case 718:
case 3549:
case 824:
case 3247:
case 991:
case 1357:
case 3232:
case 502:
case 3664:
case 4066:
case 687:
case 283:
case 3835:
case 3001:
case 1943:
case 660:
case 4058:
case 2476:
case 790:
case 3020:
case 3409:
case 3648:
case 3094:
case 3763:
case 3662:
case 2046:
case 234:
case 602:
case 1153:
case 1255:
case 392:
case 2415:
case 1781:
case 167:
case 1971:
case 3530:
case 3600:
case 3177:
case 817:
case 2900:
case 477:
case 2158:
case 1854:
case 2166:
case 1785:
case 1852:
case 2818:
case 1846:
case 553:
case 2921:
case 1251:
case 587:
case 262:
case 3625:
case 3570:
case 3308:
case 1513:
case 3830:
case 150:
case 3137:
case 813:
case 1406:
case 2619:
case 71:
case 3144:
case 500:
case 4081:
case 634:
case 2587:
case 2289:
case 940:
case 3025:
case 3339:
case 1546:
case 2518:
case 126:
case 3021:
case 1315:
case 583:
case 439:
case 2759:
case 107:
case 954:
case 792:
case 3799:
case 1554:
case 3531:
case 3913:
case 1970:
case 3423:
case 3272:
case 3849:
case 1376:
case 182:
case 412:
case 3048:
case 3274:
case 3694:
case 1484:
case 937:
case 3062:
case 1618:
case 1780:
case 2646:
case 2714:
case 976:
case 2326:
case 1250:
case 2283:
case 2185:
case 2920:
case 849:
case 1217:
case 657:
case 260:
case 3605:
case 562:
case 287:
case 3875:
case 2613:
case 1735:
case 3558:
case 749:
case 4075:
case 2007:
case 2245:
case 324:
case 3719:
case 493:
case 3566:
case 135:
case 2465:
case 346:
case 1527:
case 25:
case 2598:
case 1863:
case 108:
case 431:
case 1162:
case 1302:
case 3659:
case 3896:
case 4049:
case 1593:
case 2130:
case 645:
case 2837:
case 2856:
case 4071:
case 2699:
case 2577:
case 1677:
case 1599:
case 1297:
case 58:
case 4043:
case 1958:
case 1100:
case 2701:
case 1966:
case 2273:
case 317:
case 2347:
case 2424:
case 2490:
case 2720:
case 2332:
case 3927:
case 841:
case 288:
case 3885:
case 996:
case 47:
case 1223:
case 4016:
case 1980:
case 3614:
case 713:
case 1869:
case 905:
case 1386:
case 1278:
case 16:
case 1044:
case 2627:
case 1056:
case 2705:
case 370:
case 3713:
case 2149:
case 1770:
case 1094:
case 67:
case 1020:
case 458:
case 1662:
case 1763:
case 4027:
case 2378:
case 1664:
case 2286:
case 3819:
case 1575:
case 3943:
case 782:
case 2630:
case 531:
case 1571:
case 2742:
case 2070:
case 1467:
case 3357:
case 1232:
case 835:
case 1373:
case 3426:
case 352:
case 2525:
case 2744:
case 1328:
case 48:
case 750:
case 1379:
case 631:
case 2127:
case 3846:
case 3785:
case 2204:
case 278:
case 1198:
case 1625:
case 86:
case 3251:
case 2894:
case 1341:
case 3114:
case 3112:
case 693:
case 2035:
case 2892:
case 2801:
case 2291:
case 297:
case 1530:
case 1870:
case 3971:
case 2295:
case 329:
case 2031:
case 951:
case 2329:
case 380:
case 726:
case 3153:
case 225:
case 192:
case 3255:
case 1345:
case 2562:
case 1403:
case 707:
case 1516:
case 2548:
case 141:
case 3432:
case 3267:
case 3390:
case 3569:
case 844:
case 3447:
case 3324:
case 1581:
case 3996:
case 1053:
case 3238:
case 1383:
case 3077:
case 400:
case 2968:
case 3730:
case 4013:
case 3434:
case 3637:
case 863:
case 3743:
case 3656:
case 2119:
case 483:
case 2058:
case 850:
case 539:
case 113:
case 1014:
case 573:
case 69:
case 3644:
case 3098:
case 3981:
case 2853:
case 434:
case 368:
case 2685:
case 735:
case 1969:
case 172:
case 1187:
case 2215:
case 512:
case 3771:
case 236:
case 959:
case 708:
case 59:
case 3775:
case 277:
case 1866:
case 2154:
case 2211:
case 3563:
case 1118:
case 2146:
case 2152:
case 639:
case 2681:
case 1059:
case 986:
case 2814:
case 3547:
case 854:
case 2715:
case 3249:
case 371:
case 3872:
case 1888:
case 1359:
case 3703:
case 3602:
case 3691:
case 399:
case 2182:
case 3955:
case 3061:
case 122:
case 666:
case 2651:
case 3534:
case 3874:
case 2655:
case 206:
case 1850:
case 3065:
case 2883:
case 738:
case 840:
case 447:
case 2904:
case 2902:
case 269:
case 1110:
case 1817:
case 3128:
case 705:
case 33:
case 3398:
case 4084:
case 3179:
case 3141:
case 1314:
case 3230:
case 2960:
case 3767:
case 1312:
case 3738:
case 972:
case 1934:
case 4082:
case 1555:
case 3022:
case 2776:
case 3145:
case 2380:
case 3090:
case 3709:
case 2986:
case 1207:
case 737:
case 3615:
case 2911:
case 52:
case 2702:
case 2331:
case 228:
case 3183:
case 2029:
case 1122:
case 1475:
case 3751:
case 1878:
case 1471:
case 333:
case 1823:
case 1608:
case 1567:
case 3526:
case 342:
case 2425:
case 2915:
case 2540:
case 3611:
case 384:
case 2845:
case 1028:
case 740:
case 2097:
case 3010:
case 3057:
case 62:
case 2370:
case 2667:
case 3036:
case 91:
case 1443:
case 1829:
case 1305:
case 3296:
case 3189:
case 1734:
case 1392:
case 2023:
case 3938:
case 4074:
case 501:
case 2760:
case 2078:
case 896:
case 2464:
case 941:
case 2462:
case 2539:
case 2237:
case 3318:
case 1503:
case 2879:
case 1416:
case 2448:
case 151:
case 1394:
case 1633:
case 3851:
case 1950:
case 1368:
case 2294:
case 1108:
case 1356:
case 2565:
case 42:
case 2804:
case 3246:
case 1086:
case 2802:
case 1427:
case 1344:
case 24:
case 2891:
case 2672:
case 2773:
case 2292:
case 1917:
case 4009:
case 1988:
case 3972:
case 2363:
case 786:
case 2205:
case 2103:
case 1624:
case 2032:
case 3213:
case 1690:
case 1270:
case 3115:
case 655:
case 1622:
case 1493:
case 1778:
case 3683:
case 285:
case 3974:
case 1499:
case 1729:
case 3689:
case 3176:
case 1661:
case 722:
case 2109:
case 648:
case 1133:
case 851:
case 3517:
case 3219:
case 374:
case 1095:
case 2741:
case 1140:
case 138:
case 1665:
case 2138:
case 2860:
case 1574:
case 96:
case 3774:
case 1978:
case 1413:
case 3982:
case 1923:
case 1506:
case 963:
case 3040:
case 2026:
case 950:
case 3293:
case 1610:
case 219:
case 3772:
case 3673:
case 907:
case 1266:
case 2684:
case 2973:
case 154:
case 3033:
case 1997:
case 3348:
case 2151:
case 616:
case 944:
case 926:
case 630:
case 1454:
case 1750:
case 822:
case 1582:
case 982:
case 3578:
case 3838:
case 3160:
case 886:
case 3867:
case 2789:
case 1015:
case 2941:
case 3039:
case 1584:
case 3321:
case 423:
case 3325:
case 3597:
case 859:
case 1419:
case 2557:
case 1929:
case 2876:
case 4051:
case 2536:
case 3435:
case 2571:
case 690:
case 4077:
case 300:
case 1737:
case 2438:
case 2467:
case 2549:
case 3962:
case 753:
case 2373:
case 3948:
case 2328:
case 1260:
case 1744:
case 1397:
case 2094:
case 2409:
case 1433:
case 2763:
case 3046:
case 3052:
case 3384:
case 40:
case 1378:
case 3054:
case 1199:
case 2664:
case 2001:
case 3476:
case 383:
case 1323:
case 2835:
case 1630:
case 2530:
case 421:
case 1295:
case 1193:
case 1675:
case 2177:
case 1031:
case 1805:
case 1439:
case 468:
case 1562:
case 2345:
case 241:
case 2516:
case 2379:
case 1204:
case 2198:
case 178:
case 1127:
case 3411:
case 3818:
case 1820:
case 362:
case 1894:
case 1892:
case 1035:
case 702:
case 3900:
case 1801:
case 3019:
case 3166:
case 1291:
case 617:
case 927:
case 1066:
case 3374:
case 3233:
case 1058:
case 2014:
case 1276:
case 2963:
case 546:
case 3027:
case 358:
case 452:
case 4087:
case 995:
case 3663:
case 788:
case 3764:
case 1968:
case 3093:
case 1937:
case 2226:
case 670:
case 1956:
case 1942:
case 177:
case 914:
case 2451:
case 2389:
case 624:
case 2866:
case 3099:
case 1211:
case 3402:
case 38:
case 3721:
case 3491:
case 1152:
case 2118:
case 3208:
case 3669:
case 1685:
case 570:
case 3544:
case 2596:
case 3725:
case 272:
case 3495:
case 3568:
case 467:
case 429:
case 1215:
case 3170:
case 1113:
case 887:
case 345:
case 75:
case 3542:
case 110:
case 3537:
case 244:
case 3445:
case 3303:
case 2552:
case 331:
case 3520:
case 3075:
case 207:
case 3592:
case 446:
case 2554:
case 552:
case 2931:
case 3049:
case 263:
case 667:
case 2406:
case 629:
case 250:
case 3505:
case 2311:
case 797:
case 3479:
case 1587:
case 1289:
case 3441:
case 3261:
case 102:
case 1326:
case 3918:
case 1410:
case 503:
case 2687:
case 3798:
case 2250:
case 1920:
case 3428:
case 1994:
case 943:
case 2519:
case 2217:
case 3338:
case 1992:
case 5:
case 1901:
case 3043:
case 3800:
case 932:
case 810:
case 153:
case 417:
case 1436:
case 1712:
case 3367:
case 1654:
case 2482:
case 877:
case 2288:
case 1905:
case 2376:
case 282:
case 567:
case 529:
case 3169:
case 580:
case 2484:
case 2780:
case 2618:
case 1646:
case 1652:
case 3987:
case 2391:
case 1069:
case 2148:
case 1116:
case 668:
case 3489:
case 1130:
case 1461:
case 2731:
case 2304:
case 1837:
case 621:
case 2164:
case 911:
case 1842:
case 1856:
case 2735:
case 373:
case 94:
case 1007:
case 1465:
case 3355:
case 1598:
case 1959:
case 2229:
case 3085:
case 208:
case 710:
case 339:
case 2223:
case 521:
case 878:
case 3787:
case 2869:
case 4062:
case 2044:
case 1627:
case 2278:
case 2698:
case 1705:
case 2056:
case 568:
case 2037:
case 897:
case 3977:
case 2474:
case 2958:
case 1912:
case 2807:
case 2966:
case 1701:
case 1334:
case 1422:
case 1273:
case 1175:
case 1792:
case 3210:
case 1794:
case 3236:
case 1424:
case 1332:
case 3257:
case 825:
case 1490:
case 39:
case 3680:
case 1063:
case 1914:
case 861:
case 2988:
case 4040:
case 1205:
case 2139:
case 1103:
case 2624:
case 1032:
case 1034:
case 2493:
case 828:
case 1477:
case 2060:
case 185:
case 2778:
case 3650:
case 875:
case 2368:
case 95:
case 3412:
case 1983:
case 1294:
case 3736:
case 2342:
case 2337:
case 3218:
case 1804:
case 2086:
case 3924:
case 1728:
case 14:
case 3990:
case 1891:
case 2427:
case 565:
case 2344:
case 1672:
case 1773:
case 1292:
case 3688:
case 4033:
case 3414:
case 699:
case 2095:
case 3126:
case 2140:
case 238:
case 2231:
case 3385:
case 671:
case 4039:
case 1989:
case 205:
case 1860:
case 2665:
case 53:
case 1138:
case 2574:
case 727:
case 2729:
case 988:
case 4008:
case 3965:
case 3051:
case 665:
case 3459:
case 1369:
case 795:
case 1524:
case 2235:
case 3381:
case 2091:
case 1886:
case 1745:
case 2266:
case 1684:
case 254:
case 1973:
case 2446:
case 1811:
case 3420:
case 3790:
case 2258:
case 3009:
case 3316:
case 3724:
case 3494:
case 3492:
case 3623:
case 3722:
case 3330:
case 1151:
case 2076:
case 3401:
case 3936:
case 3957:
case 1783:
case 3298:
case 32:
case 456:
case 2636:
case 542:
case 2657:
case 806:
case 2280:
case 1253:
case 591:
case 902:
case 3343:
case 2506:
case 240:
case 827:
case 489:
case 1026:
case 119:
case 533:
case 1510:
case 3573:
case 3833:
case 474:
case 953:
case 2011:
case 775:
case 987:
case 1606:
case 3765:
case 2929:
case 143:
case 3349:
case 1536:
case 2582:
case 237:
case 3134:
case 761:
case 2015:
case 3132:
case 1979:
case 3147:
case 3003:
case 728:
case 164:
case 106:
case 1883:
case 3708:
case 3822:
case 169:
case 3890:
case 3586:
case 348:
case 2817:
case 2485:
case 2888:
case 442:
case 479:
case 2359:
case 1184:
case 3739:
case 3399:
case 3560:
case 1182:
case 1651:
case 3225:
case 195:
case 222:
case 3123:
case 2089:
case 4036:
case 1776:
case 3634:
case 3504:
case 1050:
case 3865:
case 484:
case 1017:
case 864:
case 2932:
case 3444:
case 3264:
case 2726:
case 620:
case 936:
case 3595:
case 2314:
case 1088:
case 910:
case 3074:
case 1889:
case 1358:
case 2312:
case 3468:
case 3262:
case 1106:
case 3437:
case 1366:
case 2555:
case 2934:
case 2538:
case 175:
case 581:
case 2449:
case 4061:
case 2608:
case 1174:
case 1425:
case 743:
case 2041:
case 2079:
case 1540:
case 2124:
case 2509:
case 2207:
case 1533:
case 3810:
case 161:
case 2190:
case 3117:
case 811:
case 1791:
case 1421:
case 1828:
case 2639:
case 1702:
case 1603:
case 694:
case 1331:
case 3150:
case 128:
case 764:
case 1400:
case 4065:
case 3836:
case 2122:
case 347:
case 885:
case 3857:
case 2475:
case 2734:
case 925:
case 615:
case 1023:
case 1244:
case 1237:
case 1462:
case 2926:
case 43:
case 1242:
case 1256:
case 1879:
case 2747:
case 2394:
case 3515:
case 1448:
case 1841:
case 1609:
case 1268:
case 2633:
case 1845:
case 1786:
case 2640:
case 3511:
case 3933:
case 2028:
case 4024:
case 997:
case 3626:
case 1370:
case 1667:
case 978:
case 4022:
case 719:
case 2829:
case 330:
case 2305:
case 2443:
case 2165:
case 2263:
case 1839:
case 2803:
case 2040:
case 1697:
case 1277:
case 2628:
case 2293:
case 2195:
case 2772:
case 281:
case 3815:
case 2984:
case 2470:
case 2982:
case 1038:
case 215:
case 1401:
case 1330:
case 3151:
case 1492:
case 1722:
case 3682:
case 12:
case 1957:
case 2227:
case 4086:
case 3973:
case 2191:
case 2362:
case 3684:
case 1724:
case 1494:
case 2033:
case 1147:
case 4095:
case 3979:
case 1132:
case 101:
case 2321:
case 438:
case 1840:
case 1003:
case 2431:
case 2160:
case 1629:
case 2300:
case 1134:
case 1375:
case 1761:
case 4004:
case 1371:
case 1349:
case 3536:
case 97:
case 855:
case 3557:
case 496:
case 2008:
case 3876:
case 2809:
case 2325:
case 294:
case 3510:
case 2641:
case 1573:
case 2299:
case 2111:
case 34:
case 3728:
case 454:
case 1924:
case 2254:
case 3802:
case 1396:
case 1414:
case 3672:
case 1710:
case 1688:
case 3292:
case 1736:
case 3294:
case 3674:
case 4076:
case 1757:
case 3804:
case 1218:
case 939:
case 256:
case 1287:
case 3034:
case 2974:
case 2683:
case 3477:
case 847:
case 2855:
case 385:
case 659:
case 3103:
case 220:
case 2480:
case 1453:
case 1617:
case 3363:
case 289:
case 2213:
case 2115:
case 3047:
case 3109:
case 1381:
case 123:
case 3524:
case 1459:
case 3745:
case 2219:
case 3886:
case 476:
case 1583:
case 1965:
case 2689:
case 2176:
case 2706:
case 1055:
case 1961:
case 3860:
case 912:
case 3307:
case 816:
case 4015:
case 3741:
case 2588:
case 109:
case 3779:
case 3400:
case 3029:
case 2285:
case 3704:
case 328:
case 3331:
case 2183:
case 147:
case 676:
case 2751:
case 1836:
case 701:
case 361:
case 2615:
case 1810:
case 3911:
case 3873:
case 3702:
case 983:
case 3828:
case 3421:
case 2903:
case 242:
case 3425:
case 1188:
case 3540:
case 2611:
case 2884:
case 375:
case 2882:
case 1319:
case 3174:
case 422:
case 233:
case 4089:
case 2036:
case 1313:
case 3667:
case 3508:
case 866:
case 4083:
case 486:
case 962:
case 576:
case 2909:
case 1511:
case 3845:
case 1626:
case 2387:
case 654:
case 3879:
case 3256:
case 3242:
case 1352:
case 823:
case 3237:
case 3268:
case 3448:
case 1940:
case 640:
case 2296:
case 2676:
case 3244:
case 1082:
case 2604:
case 1399:
case 1560:
case 395:
case 2955:
case 2061:
case 1123:
case 605:
case 2534:
case 82:
case 2532:
case 2249:
case 638:
case 2271:
case 299:
case 2703:
case 1739:
case 3184:
case 3991:
case 369:
case 2275:
case 2173:
case 1824:
case 2128:
case 3711:
case 1197:
case 1586:
case 2065:
case 3904:
case 709:
case 1861:
case 3358:
case 3889:
case 1248:
case 3366:
case 1437:
case 2738:
case 3106:
case 1740:
case 1444:
case 451:
case 1072:
case 1595:
case 945:
case 2463:
case 3017:
case 801:
case 1502:
case 3380:
case 2145:
case 3986:
case 1647:
case 2024:
case 596:
case 2709:
case 3776:
case 1634:
case 2022:
case 1393:
case 1865:
case 1504:
case 1131:
case 3350:
case 4005:
case 3968:
case 2077:
case 1764:
case 79:
case 3942:
case 2434:
case 2322:
case 1093:
case 3937:
case 2447:
case 1748:
case 2716:
case 3944:
case 66:
case 2432:
case 2267:
case 1663:
case 2238:
case 3388:
case 4094:
case 3276:
case 158:
case 1486:
case 2644:
case 1027:
case 2098:
case 2899:
case 2743:
case 508:
case 3058:
case 2668:
case 1233:
case 2209:
case 948:
case 1374:
case 3113:
case 221:
case 2893:
case 1607:
case 2203:
case 310:
case 1537:
case 2771:
case 56:
case 1556:
case 336:
case 1877:
case 145:
case 1544:
case 2981:
case 268:
case 1725:
case 1495:
case 955:
case 441:
case 3146:
case 1721:
case 1898:
case 1402:
case 1208:
case 3814:
case 3681:
case 2985:
case 3812:
case 635:
case 2361:
case 2775:
case 1404:
case 1099:
case 3154:
case 1700:
case 1054:
case 3500:
case 1382:
case 3378:
case 183:
case 904:
case 3323:
case 157:
case 413:
case 4012:
case 1476:
case 3433:
case 507:
case 2159:
case 1046:
case 2796:
case 2426:
case 2310:
case 1962:
case 3744:
case 4053:
case 2930:
case 873:
case 77:
case 3742:
case 3643:
case 2336:
case 1013:
case 2357:
case 3801:
case 3408:
case 1158:
case 3649:
case 2112:
case 3035:
case 3892:
case 3291:
case 607:
case 1306:
case 3671:
case 2975:
case 397:
case 3202:
case 2854:
case 1019:
case 812:
case 2846:
case 1818:
case 2852:
case 3204:
case 378:
case 4059:
case 930:
case 134:
case 793:
case 3439:
case 2153:
case 1925:
case 1180:
case 1887:
case 1415:
case 2813:
case 267:
case 3675:
case 3193:
case 280:
case 3805:
case 3031:
case 2949:
case 444:
case 1085:
case 3959:
case 35:
case 3598:
case 1514:
case 1512:
case 2558:
case 800:
case 173:
case 2566:
case 3465:
case 246:
case 2719:
case 224:
case 3868:
case 3130:
case 3241:
case 3856:
case 857:
case 450:
case 3699:
case 3279:
case 78:
case 649:
case 672:
case 3844:
case 2659:
case 2896:
case 3490:
case 19:
case 1257:
case 2927:
case 1559:
case 3914:
case 3063:
case 2885:
case 1680:
case 2653:
case 923:
case 2754:
case 3228:
case 3912:
case 3273:
case 1210:
case 3175:
case 3693:
case 3792:
case 3334:
case 2284:
case 3705:
case 270:
case 549:
case 572:
case 2713:
case 1658:
case 482:
case 1096:
case 1787:
case 112:
case 3953:
case 2282:
case 3627:
case 862:
case 1479:
case 2025:
case 1441:
case 858:
case 3289:
case 2830:
case 2570:
case 762:
case 2308:
case 1864:
case 2919:
case 1592:
case 2000:
case 435:
case 1163:
case 2021:
case 1265:
case 2339:
case 3518:
case 92:
case 1520:
case 131:
case 1594:
case 1016:
case 2274:
case 1169:
case 783:
case 2694:
case 2620:
case 2333:
case 3181:
case 1825:
case 2062:
case 3652:
case 4044:
case 2913:
case 2871:
case 2478:
case 3654:
case 2531:
case 2064:
case 2601:
case 3905:
case 290:
case 2423:
case 2272:
case 541:
case 1030:
case 1800:
case 3901:
case 360:
case 3992:
case 1338:
case 387:
case 2875:
case 1670:
case 1367:
case 2954:
case 3436:
case 2535:
case 2946:
case 3714:
case 3326:
case 2340:
case 3994:
case 1798:
case 700:
case 3283:
case 3185:
case 17:
case 3920:
case 1428:
case 2497:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760310001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,];
var gg_b = "1760310001/";

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
