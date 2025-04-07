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
case 1903:
case 3668:
case 1763:
case 1044:
case 958:
case 3340:
case 276:
case 3001:
case 1972:
case 290:
case 153:
case 3380:
case 2370:
case 2632:
case 3650:
case 566:
case 1294:
case 30:
case 3190:
case 3125:
case 282:
case 694:
case 1124:
case 2427:
case 788:
case 3915:
case 784:
case 1711:
case 1546:
case 3938:
case 940:
case 2610:
case 3209:
case 2773:
case 593:
case 1360:
case 3743:
case 177:
case 2962:
case 1339:
case 3767:
case 2241:
case 3907:
case 969:
case 2281:
case 1623:
case 3271:
case 915:
case 3827:
case 399:
case 747:
case 2129:
case 572:
case 3868:
case 803:
case 1696:
case 735:
case 2919:
case 1848:
case 1156:
case 342:
case 2810:
case 1598:
case 2205:
case 2089:
case 768:
case 225:
case 1747:
case 62:
case 2236:
case 3019:
case 3590:
case 846:
case 1639:
case 939:
case 3840:
case 722:
case 2979:
case 914:
case 3263:
case 3989:
case 3949:
case 2133:
case 2251:
case 2870:
case 918:
case 719:
case 2007:
case 1709:
case 741:
case 224:
case 1969:
case 228:
case 765:
case 902:
case 1146:
case 3991:
case 1186:
case 1093:
case 734:
case 2015:
case 2670:
case 3327:
case 2713:
case 3368:
case 2038:
case 171:
case 3640:
case 2985:
case 3975:
case 955:
case 2964:
case 1228:
case 2704:
case 2945:
case 3062:
case 1771:
case 536:
case 3434:
case 1658:
case 3753:
case 1042:
case 3287:
case 2440:
case 2761:
case 300:
case 1198:
case 2901:
case 2480:
case 1531:
case 1974:
case 1418:
case 456:
case 4018:
case 1556:
case 2634:
case 785:
case 1388:
case 29:
case 1912:
case 1176:
case 1108:
case 309:
case 737:
case 98:
case 2991:
case 3834:
case 328:
case 866:
case 227:
case 3621:
case 1273:
case 3059:
case 3251:
case 2949:
case 3133:
case 2263:
case 2421:
case 761:
case 745:
case 3236:
case 2525:
case 3821:
case 1014:
case 3310:
case 710:
case 951:
case 886:
case 1306:
case 3634:
case 3480:
case 2247:
case 3901:
case 1072:
case 200:
case 1984:
case 3761:
case 2055:
case 1003:
case 3277:
case 872:
case 1944:
case 2287:
case 1460:
case 3964:
case 4060:
case 1781:
case 1137:
case 3500:
case 1952:
case 3945:
case 3985:
case 1516:
case 1458:
case 1635:
case 3038:
case 608:
case 2680:
case 1618:
case 3450:
case 178:
case 2432:
case 1606:
case 546:
case 2743:
case 3773:
case 3075:
case 3610:
case 2220:
case 93:
case 2915:
case 2190:
case 960:
case 1012:
case 3997:
case 382:
case 2650:
case 3632:
case 1736:
case 4048:
case 71:
case 1982:
case 2668:
case 3955:
case 325:
case 652:
case 1261:
case 1777:
case 3205:
case 3299:
case 3810:
case 3321:
case 1878:
case 2792:
case 3919:
case 1423:
case 1806:
case 836:
case 750:
case 3129:
case 1993:
case 744:
case 221:
case 992:
case 2827:
case 1213:
case 2728:
case 1116:
case 3832:
case 980:
case 2907:
case 3100:
case 35:
case 630:
case 929:
case 2817:
case 991:
case 1894:
case 1223:
case 2681:
case 103:
case 904:
case 443:
case 1461:
case 345:
case 1565:
case 2033:
case 3405:
case 1544:
case 3363:
case 575:
case 2471:
case 337:
case 651:
case 2159:
case 3545:
case 1552:
case 3900:
case 1296:
case 1404:
case 3441:
case 3585:
case 234:
case 1916:
case 1383:
case 241:
case 912:
case 3758:
case 2605:
case 1086:
case 4013:
case 1413:
case 265:
case 1022:
case 2495:
case 3268:
case 381:
case 479:
case 3227:
case 2591:
case 526:
case 1694:
case 1367:
case 2409:
case 2841:
case 2549:
case 3347:
case 3579:
case 1182:
case 3657:
case 2210:
case 3609:
case 1248:
case 2925:
case 3417:
case 1392:
case 692:
case 2270:
case 1165:
case 3280:
case 782:
case 2487:
case 1184:
case 3240:
case 3863:
case 680:
case 3519:
case 1628:
case 2317:
case 776:
case 3025:
case 3395:
case 3687:
case 1258:
case 1593:
case 2677:
case 3647:
case 288:
case 3185:
case 387:
case 2175:
case 3796:
case 1260:
case 3309:
case 1883:
case 3357:
case 871:
case 3145:
case 2559:
case 284:
case 649:
case 247:
case 1402:
case 4002:
case 1554:
case 1828:
case 348:
case 2381:
case 2636:
case 344:
case 1473:
case 660:
case 2411:
case 3663:
case 1908:
case 2538:
case 1976:
case 1683:
case 2399:
case 3748:
case 1056:
case 1892:
case 367:
case 2966:
case 725:
case 1031:
case 63:
case 3179:
case 3847:
case 3451:
case 1582:
case 2877:
case 2305:
case 3887:
case 4067:
case 2309:
case 3559:
case 3234:
case 2796:
case 287:
case 4028:
case 92:
case 359:
case 2647:
case 2687:
case 1922:
case 3677:
case 3836:
case 2090:
case 2025:
case 1492:
case 3317:
case 615:
case 172:
case 2101:
case 2240:
case 1235:
case 1998:
case 70:
case 1218:
case 186:
case 742:
case 2179:
case 193:
case 994:
case 1361:
case 1602:
case 901:
case 3966:
case 826:
case 3706:
case 3778:
case 364:
case 1673:
case 2597:
case 3399:
case 2788:
case 1986:
case 166:
case 3651:
case 231:
case 3411:
case 658:
case 1946:
case 2663:
case 689:
case 244:
case 3341:
case 4083:
case 1443:
case 2371:
case 2562:
case 1304:
case 1732:
case 3381:
case 2929:
case 1661:
case 1076:
case 365:
case 341:
case 2820:
case 2895:
case 2758:
case 3605:
case 1008:
case 2585:
case 2857:
case 3575:
case 3699:
case 2809:
case 1302:
case 2564:
case 2760:
case 2900:
case 1530:
case 2481:
case 3159:
case 261:
case 1453:
case 2405:
case 2501:
case 64:
case 3718:
case 1613:
case 245:
case 3351:
case 496:
case 1574:
case 2671:
case 1956:
case 2066:
case 3681:
case 1604:
case 2119:
case 25:
case 3641:
case 571:
case 3990:
case 4094:
case 1494:
case 1206:
case 2197:
case 700:
case 2417:
case 2657:
case 210:
case 1172:
case 2695:
case 3589:
case 385:
case 2155:
case 3549:
case 1861:
case 3457:
case 513:
case 920:
case 2162:
case 3881:
case 3617:
case 3232:
case 2871:
case 618:
case 3138:
case 3495:
case 614:
case 874:
case 3115:
case 3420:
case 2268:
case 281:
case 2970:
case 3849:
case 4084:
case 453:
case 1372:
case 2187:
case 2147:
case 4044:
case 2355:
case 1078:
case 1314:
case 2397:
case 1630:
case 2645:
case 720:
case 638:
case 2068:
case 251:
case 3315:
case 1674:
case 1729:
case 2362:
case 4052:
case 619:
case 1452:
case 3581:
case 477:
case 2050:
case 1700:
case 2571:
case 879:
case 665:
case 3716:
case 3541:
case 1869:
case 900:
case 1612:
case 2845:
case 2885:
case 3307:
case 3359:
case 3875:
case 217:
case 1102:
case 2520:
case 2595:
case 3649:
case 3136:
case 28:
case 2921:
case 3517:
case 2319:
case 2801:
case 3691:
case 1874:
case 116:
case 3233:
case 292:
case 1814:
case 806:
case 921:
case 3419:
case 1923:
case 3349:
case 315:
case 1161:
case 1426:
case 413:
case 583:
case 3141:
case 2862:
case 659:
case 1369:
case 1104:
case 3181:
case 2171:
case 1493:
case 2722:
case 794:
case 1113:
case 3838:
case 249:
case 684:
case 211:
case 2438:
case 1603:
case 647:
case 3708:
case 2511:
case 2415:
case 2120:
case 3034:
case 570:
case 358:
case 1330:
case 1454:
case 1502:
case 2364:
case 3950:
case 3375:
case 3807:
case 2385:
case 1573:
case 3859:
case 1018:
case 3551:
case 3615:
case 156:
case 1374:
case 340:
case 2301:
case 2080:
case 668:
case 3638:
case 1733:
case 4042:
case 72:
case 1442:
case 635:
case 23:
case 3536:
case 563:
case 2391:
case 349:
case 2229:
case 797:
case 5:
case 311:
case 2815:
case 1626:
case 687:
case 3407:
case 1567:
case 2737:
case 1039:
case 1528:
case 3862:
case 2141:
case 87:
case 3798:
case 2577:
case 3379:
case 1153:
case 269:
case 1231:
case 962:
case 2199:
case 1592:
case 2419:
case 705:
case 3897:
case 1906:
case 3662:
case 3819:
case 3225:
case 2117:
case 1414:
case 1194:
case 33:
case 650:
case 3040:
case 3563:
case 1826:
case 1365:
case 4003:
case 2615:
case 2070:
case 4072:
case 1384:
case 1472:
case 240:
case 3301:
case 2375:
case 254:
case 3697:
case 2807:
case 3345:
case 258:
case 2034:
case 1352:
case 2462:
case 3932:
case 3364:
case 2950:
case 1682:
case 982:
case 3786:
case 3195:
case 648:
case 1893:
case 2708:
case 1224:
case 2541:
case 36:
case 4030:
case 3934:
case 478:
case 1167:
case 2464:
case 1354:
case 3027:
case 3601:
case 1684:
case 1644:
case 1222:
case 2338:
case 637:
case 3068:
case 1048:
case 3645:
case 2010:
case 2675:
case 2599:
case 4012:
case 1412:
case 2505:
case 1553:
case 3147:
case 1474:
case 1918:
case 4074:
case 2401:
case 330:
case 65:
case 1326:
case 1865:
case 2151:
case 3489:
case 1884:
case 3266:
case 1790:
case 610:
case 1725:
case 1023:
case 3319:
case 38:
case 909:
case 202:
case 3921:
case 1286:
case 708:
case 3520:
case 704:
case 1393:
case 3595:
case 4069:
case 218:
case 1469:
case 1143:
case 3509:
case 2875:
case 1183:
case 729:
case 3845:
case 1506:
case 2936:
case 3510:
case 816:
case 676:
case 690:
case 3714:
case 3963:
case 2279:
case 2742:
case 948:
case 1608:
case 2433:
case 2951:
case 305:
case 3249:
case 143:
case 2782:
case 403:
case 1269:
case 950:
case 1837:
case 294:
case 2754:
case 3081:
case 711:
case 2071:
case 2666:
case 397:
case 2527:
case 1715:
case 1486:
case 3329:
case 3291:
case 1446:
case 3633:
case 201:
case 3911:
case 2568:
case 662:
case 179:
case 4022:
case 2793:
case 1759:
case 1928:
case 2264:
case 2245:
case 3170:
case 73:
case 3833:
case 987:
case 2977:
case 1118:
case 2180:
case 2726:
case 3947:
case 2140:
case 1992:
case 3017:
case 2866:
case 1:
case 2390:
case 773:
case 1212:
case 1637:
case 625:
case 2255:
case 2087:
case 220:
case 1272:
case 632:
case 2917:
case 856:
case 1178:
case 3425:
case 2297:
case 624:
case 2168:
case 4024:
case 3920:
case 76:
case 3238:
case 628:
case 3995:
case 1816:
case 3957:
case 3909:
case 3132:
case 2262:
case 2690:
case 3800:
case 945:
case 1775:
case 3207:
case 1073:
case 3259:
case 308:
case 3534:
case 207:
case 961:
case 2752:
case 3730:
case 1376:
case 2429:
case 95:
case 329:
case 717:
case 1308:
case 391:
case 2219:
case 2366:
case 312:
case 2540:
case 2063:
case 78:
case 937:
case 2784:
case 1518:
case 446:
case 2580:
case 69:
case 3774:
case 1028:
case 3625:
case 1254:
case 3690:
case 516:
case 3150:
case 2909:
case 1322:
case 2995:
case 2238:
case 3168:
case 3297:
case 1856:
case 2425:
case 3917:
case 755:
case 2490:
case 320:
case 3255:
case 1242:
case 1779:
case 74:
case 2077:
case 1961:
case 2051:
case 3784:
case 2774:
case 493:
case 3580:
case 934:
case 2629:
case 3905:
case 3540:
case 938:
case 702:
case 1226:
case 1123:
case 919:
case 3890:
case 2600:
case 2036:
case 212:
case 1346:
case 291:
case 1824:
case 718:
case 1558:
case 3011:
case 714:
case 466:
case 229:
case 3429:
case 1913:
case 1904:
case 2730:
case 3752:
case 307:
case 1043:
case 1656:
case 1416:
case 3941:
case 2207:
case 4008:
case 3568:
case 2911:
case 301:
case 4076:
case 964:
case 2300:
case 2081:
case 3754:
case 1139:
case 3550:
case 3071:
case 196:
case 205:
case 2249:
case 3951:
case 3782:
case 1755:
case 3742:
case 2703:
case 1898:
case 1053:
case 1646:
case 2289:
case 1797:
case 2099:
case 3936:
case 823:
case 769:
case 2121:
case 32:
case 3325:
case 740:
case 1719:
case 2017:
case 1523:
case 3390:
case 642:
case 3977:
case 1265:
case 2987:
case 1622:
case 789:
case 3245:
case 1596:
case 2134:
case 3057:
case 1160:
case 2275:
case 754:
case 3020:
case 1698:
case 3793:
case 1611:
case 3542:
case 1847:
case 293:
case 2572:
case 3031:
case 3582:
case 346:
case 2361:
case 4051:
case 2602:
case 3643:
case 412:
case 4036:
case 1436:
case 2710:
case 3683:
case 1788:
case 2514:
case 2986:
case 3727:
case 827:
case 491:
case 1663:
case 582:
case 144:
case 404:
case 3867:
case 3828:
case 1371:
case 2443:
case 3402:
case 2304:
case 1562:
case 2169:
case 2732:
case 3883:
case 1357:
case 2467:
case 3152:
case 3260:
case 2428:
case 3692:
case 187:
case 778:
case 1647:
case 1395:
case 3593:
case 3258:
case 3024:
case 11:
case 1025:
case 2492:
case 979:
case 272:
case 1863:
case 562:
case 2235:
case 1240:
case 3184:
case 2998:
case 2174:
case 3526:
case 3165:
case 2206:
case 2494:
case 1197:
case 4017:
case 3392:
case 775:
case 509:
case 1609:
case 2721:
case 110:
case 80:
case 3853:
case 1695:
case 1620:
case 528:
case 2861:
case 1155:
case 3142:
case 3367:
case 2569:
case 3694:
case 2804:
case 1250:
case 1871:
case 3022:
case 532:
case 2924:
case 2661:
case 3193:
case 2076:
case 1311:
case 1820:
case 3653:
case 1895:
case 2008:
case 1585:
case 2373:
case 4041:
case 1857:
case 3383:
case 3916:
case 2734:
case 1564:
case 2302:
case 1760:
case 3404:
case 3296:
case 4081:
case 899:
case 3552:
case 842:
case 3544:
case 1363:
case 4005:
case 1405:
case 2931:
case 2770:
case 1501:
case 3584:
case 145:
case 236:
case 405:
case 2956:
case 1066:
case 2604:
case 4095:
case 2022:
case 1495:
case 4020:
case 1591:
case 1138:
case 3813:
case 1881:
case 3804:
case 2328:
case 1617:
case 1409:
case 1457:
case 4009:
case 3037:
case 3569:
case 1841:
case 3103:
case 1549:
case 3861:
case 527:
case 2098:
case 1377:
case 2182:
case 3721:
case 3494:
case 2248:
case 1925:
case 3114:
case 616:
case 2392:
case 1641:
case 713:
case 122:
case 3956:
case 825:
case 2894:
case 2223:
case 3604:
case 3613:
case 203:
case 1718:
case 3770:
case 3931:
case 1351:
case 2565:
case 3453:
case 3302:
case 3734:
case 4071:
case 2552:
case 2296:
case 3373:
case 1699:
case 141:
case 862:
case 3008:
case 119:
case 2046:
case 2653:
case 2086:
case 2413:
case 165:
case 3661:
case 2193:
case 147:
case 2554:
case 3732:
case 2750:
case 809:
case 3169:
case 3304:
case 2239:
case 996:
case 2867:
case 970:
case 50:
case 2768:
case 2908:
case 1538:
case 824:
case 2727:
case 3986:
case 366:
case 2976:
case 3673:
case 1778:
case 3710:
case 2683:
case 1706:
case 2056:
case 3602:
case 168:
case 2031:
case 393:
case 246:
case 3361:
case 135:
case 1305:
case 4063:
case 386:
case 1851:
case 4047:
case 1487:
case 89:
case 3998:
case 3235:
case 3174:
case 372:
case 2394:
case 1317:
case 599:
case 3922:
case 2258:
case 2593:
case 1677:
case 777:
case 159:
case 188:
case 2843:
case 2692:
case 3428:
case 3467:
case 2883:
case 1559:
case 3130:
case 983:
case 184:
case 2937:
case 541:
case 3912:
case 3388:
case 2014:
case 2378:
case 3292:
case 2306:
case 440:
case 81:
case 2072:
case 100:
case 538:
case 3418:
case 3974:
case 4070:
case 1055:
case 534:
case 2944:
case 2460:
case 3228:
case 3054:
case 2952:
case 3771:
case 3930:
case 2516:
case 2741:
case 3267:
case 2458:
case 1368:
case 371:
case 3122:
case 2618:
case 887:
case 3720:
case 2176:
case 1211:
case 3093:
case 2108:
case 1991:
case 3146:
case 2202:
case 916:
case 3283:
case 2439:
case 3969:
case 3757:
case 2273:
case 3709:
case 867:
case 469:
case 1880:
case 2835:
case 1840:
case 3639:
case 1421:
case 4021:
case 3131:
case 1079:
case 2777:
case 3598:
case 584:
case 2926:
case 3787:
case 2878:
case 402:
case 1792:
case 2806:
case 845:
case 559:
case 793:
case 1868:
case 2213:
case 439:
case 2496:
case 1728:
case 766:
case 2116:
case 1271:
case 1850:
case 1959:
case 418:
case 2069:
case 2954:
case 1064:
case 1432:
case 1045:
case 1743:
case 377:
case 3648:
case 535:
case 1783:
case 1085:
case 956:
case 881:
case 3358:
case 1938:
case 2508:
case 3546:
case 1915:
case 3124:
case 2576:
case 568:
case 2012:
case 2488:
case 3478:
case 4010:
case 3914:
case 1566:
case 786:
case 3406:
case 3823:
case 1380:
case 547:
case 2751:
case 1001:
case 2982:
case 2074:
case 772:
case 2942:
case 3065:
case 1340:
case 2335:
case 3044:
case 417:
case 679:
case 1100:
case 3069:
case 1241:
case 3537:
case 3204:
case 865:
case 1832:
case 3116:
case 51:
case 838:
case 1091:
case 3806:
case 3423:
case 2696:
case 2848:
case 746:
case 2156:
case 1321:
case 1810:
case 1299:
case 2888:
case 48:
case 1205:
case 2598:
case 3777:
case 2253:
case 2131:
case 2787:
case 6:
case 1049:
case 2747:
case 125:
case 587:
case 544:
case 1533:
case 2903:
case 3942:
case 2763:
case 176:
case 190:
case 3751:
case 430:
case 253:
case 3318:
case 1370:
case 3074:
case 2823:
case 3448:
case 1997:
case 2914:
case 2478:
case 4027:
case 2124:
case 451:
case 4068:
case 2546:
case 2688:
case 46:
case 1075:
case 550:
case 1450:
case 4050:
case 277:
case 1334:
case 2052:
case 2896:
case 1962:
case 888:
case 1015:
case 1713:
case 3618:
case 3458:
case 2267:
case 3516:
case 2054:
case 2228:
case 3460:
case 1704:
case 1500:
case 3137:
case 1277:
case 3965:
case 2435:
case 4040:
case 3984:
case 4080:
case 1901:
case 537:
case 2082:
case 2418:
case 473:
case 2660:
case 2292:
case 2348:
case 43:
case 19:
case 2912:
case 3014:
case 1236:
case 2323:
case 835:
case 703:
case 132:
case 2639:
case 864:
case 213:
case 2026:
case 3818:
case 1133:
case 1251:
case 1870:
case 1621:
case 2283:
case 1059:
case 124:
case 923:
case 3273:
case 2969:
case 128:
case 1834:
case 2243:
case 449:
case 109:
case 2720:
case 3176:
case 2961:
case 1051:
case 2701:
case 1774:
case 3431:
case 450:
case 1333:
case 2226:
case 56:
case 3616:
case 815:
case 1712:
case 551:
case 1036:
case 723:
case 467:
case 112:
case 431:
case 191:
case 2558:
case 2293:
case 3376:
case 129:
case 2913:
case 2386:
case 2764:
case 1534:
case 108:
case 1730:
case 1971:
case 2560:
case 2785:
case 2416:
case 1259:
case 2196:
case 2028:
case 0:
case 1800:
case 1132:
case 1909:
case 1957:
case 1769:
case 3424:
case 2322:
case 854:
case 3791:
case 3106:
case 2148:
case 3214:
case 1521:
case 626:
case 4025:
case 41:
case 2188:
case 3749:
case 2282:
case 2624:
case 2398:
case 3789:
case 152:
case 3:
case 549:
case 1017:
case 2523:
case 3135:
case 2284:
case 2265:
case 3498:
case 1987:
case 84:
case 2244:
case 580:
case 3230:
case 2252:
case 2596:
case 2437:
case 3707:
case 481:
case 3808:
case 2158:
case 818:
case 53:
case 3738:
case 674:
case 3013:
case 814:
case 3486:
case 3715:
case 1300:
case 1081:
case 437:
case 3943:
case 2902:
case 946:
case 3316:
case 3983:
case 1041:
case 3269:
case 1249:
case 270:
case 3061:
case 2331:
case 3608:
case 1703:
case 2898:
case 1963:
case 802:
case 461:
case 1099:
case 1510:
case 3506:
case 2356:
case 1121:
case 1466:
case 972:
case 3886:
case 2876:
case 3324:
case 1793:
case 3698:
case 2422:
case 1285:
case 515:
case 2707:
case 1057:
case 2759:
case 851:
case 2967:
case 2928:
case 3596:
case 3252:
case 2230:
case 2118:
case 1180:
case 2498:
case 3284:
case 2135:
case 2992:
case 2:
case 830:
case 756:
case 3523:
case 2212:
case 3548:
case 1936:
case 589:
case 3356:
case 3797:
case 3898:
case 1742:
case 4033:
case 2061:
case 1951:
case 370:
case 558:
case 2676:
case 3331:
case 1782:
case 3686:
case 2983:
case 2316:
case 434:
case 2269:
case 993:
case 194:
case 1754:
case 198:
case 3762:
case 2943:
case 1550:
case 1666:
case 3139:
case 3476:
case 465:
case 2013:
case 363:
case 3408:
case 677:
case 2446:
case 419:
case 2738:
case 101:
case 441:
case 936:
case 3083:
case 2775:
case 1941:
case 1400:
case 3656:
case 3043:
case 447:
case 2376:
case 4029:
case 3346:
case 3293:
case 1011:
case 3558:
case 3824:
case 468:
case 1890:
case 880:
case 1825:
case 716:
case 3123:
case 1540:
case 1905:
case 892:
case 1744:
case 3226:
case 2518:
case 1784:
case 3961:
case 518:
case 2203:
case 3242:
case 2789:
case 3398:
case 2272:
case 514:
case 873:
case 3092:
case 2178:
case 3188:
case 613:
case 2994:
case 2106:
case 459:
case 857:
case 2337:
case 484:
case 3067:
case 2816:
case 1150:
case 1625:
case 3028:
case 488:
case 2766:
case 1117:
case 501:
case 2194:
case 3312:
case 3733:
case 3035:
case 2365:
case 4055:
case 1615:
case 3018:
case 3482:
case 400:
case 2472:
case 2583:
case 1375:
case 1859:
case 154:
case 1807:
case 3330:
case 4062:
case 1034:
case 2060:
case 1950:
case 2682:
case 3672:
case 189:
case 1708:
case 2642:
case 3603:
case 1229:
case 52:
case 1181:
case 3104:
case 3369:
case 891:
case 1737:
case 2039:
case 3996:
case 3803:
case 1577:
case 3426:
case 3161:
case 115:
case 1389:
case 2153:
case 672:
case 1105:
case 2882:
case 2256:
case 1199:
case 4019:
case 770:
case 1419:
case 1607:
case 3814:
case 1021:
case 686:
case 2326:
case 1479:
case 1691:
case 223:
case 3874:
case 805:
case 1517:
case 2790:
case 1136:
case 3812:
case 139:
case 2286:
case 3276:
case 421:
case 2246:
case 3208:
case 118:
case 1359:
case 2469:
case 3102:
case 2143:
case 3939:
case 520:
case 3173:
case 913:
case 2128:
case 3612:
case 3869:
case 1541:
case 2430:
case 1464:
case 4064:
case 3960:
case 3674:
case 2684:
case 2644:
case 1338:
case 3958:
case 971:
case 3630:
case 2652:
case 3314:
case 3078:
case 2192:
case 636:
case 1599:
case 14:
case 2412:
case 2088:
case 1940:
case 2553:
case 3444:
case 3465:
case 2474:
case 2918:
case 155:
case 4001:
case 507:
case 3372:
case 1401:
case 3183:
case 1864:
case 2173:
case 1845:
case 2830:
case 3852:
case 3469:
case 1509:
case 462:
case 117:
case 1595:
case 3286:
case 4091:
case 898:
case 1491:
case 1111:
case 2669:
case 18:
case 1266:
case 3023:
case 323:
case 1801:
case 1163:
case 2874:
case 3865:
case 3326:
case 3918:
case 130:
case 1187:
case 1879:
case 2444:
case 504:
case 2078:
case 591:
case 1685:
case 1397:
case 3652:
case 3048:
case 1664:
case 3222:
case 2958:
case 3665:
case 1027:
case 2504:
case 1934:
case 3430:
case 3354:
case 1050:
case 1475:
case 4075:
case 975:
case 2869:
case 2612:
case 4038:
case 3224:
case 2603:
case 3893:
case 1746:
case 1120:
case 1195:
case 160:
case 505:
case 3352:
case 2502:
case 1364:
case 157:
case 1697:
case 173:
case 2482:
case 256:
case 597:
case 7:
case 1301:
case 1040:
case 978:
case 2442:
case 3826:
case 1910:
case 3414:
case 13:
case 49:
case 1290:
case 1819:
case 820:
case 2948:
case 1662:
case 3654:
case 432:
case 192:
case 2814:
case 743:
case 2872:
case 180:
case 1547:
case 3153:
case 3882:
case 2426:
case 3693:
case 2803:
case 3842:
case 1862:
case 2369:
case 1407:
case 3039:
case 2216:
case 1171:
case 3626:
case 2113:
case 552:
case 149:
case 111:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744005602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,];
var gg_b = "1744005602/";

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
