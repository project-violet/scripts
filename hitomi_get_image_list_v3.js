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
case 1315:
case 2347:
case 3197:
case 192:
case 1508:
case 3680:
case 1623:
case 1825:
case 1245:
case 66:
case 1427:
case 3115:
case 1397:
case 553:
case 3964:
case 676:
case 3800:
case 2295:
case 2862:
case 588:
case 4032:
case 2685:
case 89:
case 3878:
case 2883:
case 1638:
case 797:
case 296:
case 566:
case 1793:
case 3987:
case 560:
case 3290:
case 1750:
case 1312:
case 1570:
case 2528:
case 2029:
case 1242:
case 2743:
case 1051:
case 2895:
case 2693:
case 3200:
case 569:
case 3652:
case 457:
case 475:
case 361:
case 708:
case 1785:
case 2536:
case 3454:
case 1845:
case 2131:
case 1626:
case 1384:
case 1703:
case 2202:
case 194:
case 3077:
case 2327:
case 1222:
case 733:
case 1307:
case 1842:
case 2412:
case 3890:
case 245:
case 3853:
case 2666:
case 3107:
case 3256:
case 2886:
case 528:
case 1367:
case 892:
case 218:
case 7:
case 3830:
case 1670:
case 2503:
case 4005:
case 2981:
case 550:
case 3401:
case 742:
case 4065:
case 4083:
case 2798:
case 912:
case 1668:
case 293:
case 2633:
case 2582:
case 2437:
case 3211:
case 1389:
case 1523:
case 1977:
case 2232:
case 4086:
case 744:
case 847:
case 1174:
case 3555:
case 2514:
case 2708:
case 3951:
case 2024:
case 2648:
case 302:
case 3909:
case 2489:
case 1728:
case 3811:
case 652:
case 3137:
case 1288:
case 2636:
case 2235:
case 91:
case 1337:
case 559:
case 3969:
case 601:
case 2593:
case 4095:
case 2649:
case 2709:
case 965:
case 1587:
case 2006:
case 1699:
case 3055:
case 2769:
case 3874:
case 2972:
case 1634:
case 2176:
case 3241:
case 3968:
case 509:
case 1564:
case 651:
case 1718:
case 3821:
case 3311:
case 1289:
case 1026:
case 2751:
case 1729:
case 3473:
case 1504:
case 1435:
case 352:
case 3677:
case 2571:
case 3908:
case 3274:
case 506:
case 3998:
case 789:
case 2003:
case 2629:
case 2332:
case 3476:
case 3781:
case 1609:
case 720:
case 354:
case 1023:
case 1388:
case 911:
case 604:
case 3458:
case 1749:
case 60:
case 726:
case 227:
case 3221:
case 3841:
case 4047:
case 885:
case 2395:
case 3145:
case 1744:
case 1462:
case 3946:
case 2317:
case 758:
case 1402:
case 1345:
case 1884:
case 2739:
case 2827:
case 2425:
case 1534:
case 1405:
case 1342:
case 3279:
case 783:
case 1153:
case 1807:
case 2422:
case 2713:
case 2140:
case 3390:
case 891:
case 1687:
case 3142:
case 3353:
case 410:
case 1867:
case 977:
case 2048:
case 2386:
case 1190:
case 2624:
case 419:
case 2847:
case 1569:
case 1613:
case 2227:
case 1100:
case 2033:
case 191:
case 376:
case 370:
case 1724:
case 3926:
case 3943:
case 364:
case 1509:
case 1008:
case 825:
case 3125:
case 1551:
case 2644:
case 1070:
case 1267:
case 538:
case 2383:
case 3122:
case 3356:
case 3440:
case 2764:
case 1812:
case 2442:
case 2019:
case 2120:
case 1178:
case 1322:
case 1639:
case 3879:
case 1497:
case 576:
case 1262:
case 303:
case 199:
case 653:
case 1536:
case 2785:
case 2447:
case 1817:
case 56:
case 2643:
case 1415:
case 2626:
case 564:
case 896:
case 1327:
case 570:
case 1650:
case 29:
case 2703:
case 674:
case 1723:
case 1049:
case 1548:
case 67:
case 3944:
case 2307:
case 660:
case 3479:
case 2796:
case 1892:
case 2598:
case 1614:
case 666:
case 3220:
case 1283:
case 3840:
case 1886:
case 1347:
case 292:
case 818:
case 2009:
case 2315:
case 1802:
case 2706:
case 2427:
case 1217:
case 562:
case 2646:
case 2825:
case 3147:
case 1533:
case 4088:
case 3755:
case 2766:
case 1696:
case 3572:
case 628:
case 371:
case 1685:
case 1663:
case 1018:
case 1865:
case 3752:
case 3310:
case 2179:
case 1805:
case 1407:
case 2570:
case 190:
case 1110:
case 1528:
case 1029:
case 573:
case 1232:
case 306:
case 1101:
case 1566:
case 2698:
case 650:
case 2087:
case 3929:
case 893:
case 3301:
case 4042:
case 749:
case 1550:
case 3359:
case 2004:
case 1071:
case 2526:
case 2543:
case 919:
case 4045:
case 3273:
case 2288:
case 1636:
case 663:
case 3858:
case 1593:
case 2719:
case 1628:
case 2670:
case 3057:
case 4022:
case 1503:
case 477:
case 1563:
case 2736:
case 73:
case 734:
case 837:
case 2039:
case 501:
case 1596:
case 2668:
case 193:
case 1798:
case 3675:
case 2888:
case 1437:
case 1633:
case 2141:
case 1835:
case 907:
case 2389:
case 2546:
case 1191:
case 2977:
case 3201:
case 405:
case 778:
case 3132:
case 1618:
case 1003:
case 2130:
case 2651:
case 78:
case 3261:
case 3948:
case 1332:
case 2237:
case 975:
case 1335:
case 2749:
case 957:
case 2023:
case 3373:
case 2388:
case 2046:
case 1082:
case 3936:
case 2889:
case 3259:
case 1173:
case 4015:
case 2513:
case 1096:
case 3861:
case 72:
case 4067:
case 782:
case 350:
case 1524:
case 827:
case 1649:
case 3928:
case 2587:
case 1709:
case 1769:
case 3919:
case 1066:
case 2699:
case 1014:
case 606:
case 1972:
case 356:
case 3801:
case 187:
case 2718:
case 363:
case 2564:
case 1093:
case 3859:
case 1158:
case 2729:
case 3291:
case 1571:
case 2837:
case 2569:
case 1445:
case 2613:
case 561:
case 2417:
case 1847:
case 2325:
case 4089:
case 369:
case 3162:
case 2284:
case 2495:
case 2724:
case 3950:
case 1787:
case 2267:
case 2070:
case 3105:
case 2551:
case 2492:
case 2771:
case 1365:
case 1704:
case 372:
case 3810:
case 3906:
case 1518:
case 1019:
case 2178:
case 3183:
case 2955:
case 1716:
case 3165:
case 3831:
case 1395:
case 4037:
case 3400:
case 1739:
case 2884:
case 1317:
case 1036:
case 3982:
case 2616:
case 353:
case 1425:
case 3996:
case 3254:
case 2153:
case 2807:
case 366:
case 2534:
case 2342:
case 2599:
case 2098:
case 3963:
case 3186:
case 1140:
case 2212:
case 388:
case 374:
case 548:
case 3478:
case 1392:
case 1549:
case 1048:
case 3340:
case 360:
case 2249:
case 1022:
case 2829:
case 2498:
case 2005:
case 2319:
case 1512:
case 2172:
case 2065:
case 155:
case 3579:
case 508:
case 2062:
case 2547:
case 2175:
case 1515:
case 1689:
case 728:
case 2976:
case 1597:
case 533:
case 1809:
case 3060:
case 3277:
case 1368:
case 3674:
case 1507:
case 3198:
case 2348:
case 753:
case 2092:
case 1428:
case 2470:
case 3053:
case 1398:
case 1042:
case 2229:
case 1930:
case 3791:
case 4024:
case 1419:
case 3475:
case 991:
case 760:
case 2336:
case 774:
case 788:
case 597:
case 1584:
case 3988:
case 766:
case 3146:
case 2271:
case 38:
case 1697:
case 2382:
case 634:
case 1088:
case 1450:
case 1323:
case 1589:
case 2443:
case 1216:
case 621:
case 2647:
case 54:
case 2032:
case 640:
case 1406:
case 1839:
case 4018:
case 530:
case 3138:
case 2363:
case 1990:
case 536:
case 1287:
case 646:
case 1414:
case 4029:
case 811:
case 1338:
case 542:
case 2446:
case 681:
case 2350:
case 257:
case 1343:
case 632:
case 499:
case 1152:
case 331:
case 3011:
case 3143:
case 1960:
case 1482:
case 2871:
case 3710:
case 382:
case 1804:
case 2824:
case 1667:
case 3922:
case 2366:
case 1485:
case 445:
case 2438:
case 1747:
case 3754:
case 2715:
case 2306:
case 1155:
case 1239:
case 631:
case 1037:
case 3280:
case 624:
case 3511:
case 112:
case 3104:
case 1223:
case 2722:
case 1645:
case 62:
case 2413:
case 1843:
case 1826:
case 381:
case 4036:
case 3164:
case 3021:
case 1765:
case 2371:
case 706:
case 207:
case 3852:
case 2695:
case 2893:
case 2954:
case 1979:
case 2324:
case 2686:
case 1238:
case 216:
case 717:
case 3912:
case 814:
case 81:
case 1444:
case 2806:
case 210:
case 2725:
case 1642:
case 3187:
case 3600:
case 2293:
case 334:
case 2662:
case 3041:
case 33:
case 2896:
case 3252:
case 1792:
case 2882:
case 4033:
case 3740:
case 2404:
case 678:
case 321:
case 1089:
case 1243:
case 68:
case 684:
case 11:
case 1823:
case 1625:
case 2250:
case 2602:
case 3660:
case 2931:
case 3530:
case 1339:
case 1717:
case 346:
case 580:
case 2803:
case 2605:
case 3255:
case 2266:
case 2214:
case 709:
case 3656:
case 4019:
case 2863:
case 586:
case 1838:
case 568:
case 3907:
case 2344:
case 3194:
case 2885:
case 1418:
case 1334:
case 1542:
case 2228:
case 1067:
case 1270:
case 3590:
case 4006:
case 1429:
case 4014:
case 935:
case 3553:
case 3134:
case 2219:
case 1007:
case 2586:
case 703:
case 3199:
case 4093:
case 2595:
case 487:
case 3377:
case 1941:
case 2233:
case 1732:
case 1177:
case 3611:
case 2517:
case 738:
case 2991:
case 1208:
case 805:
case 3079:
case 2329:
case 2583:
case 2901:
case 4085:
case 1974:
case 1351:
case 3481:
case 1449:
case 1298:
case 2318:
case 2505:
case 2828:
case 1870:
case 2499:
case 3630:
case 2248:
case 2961:
case 1522:
case 3560:
case 1369:
case 1808:
case 343:
case 1097:
case 1688:
case 3169:
case 2833:
case 2635:
case 4082:
case 583:
case 771:
case 427:
case 1868:
case 1015:
case 1309:
case 1921:
case 2562:
case 3500:
case 1086:
case 1789:
case 2834:
case 3741:
case 2899:
case 1092:
case 3148:
case 4087:
case 3881:
case 2251:
case 1849:
case 2419:
case 2042:
case 3661:
case 762:
case 2209:
case 2637:
case 543:
case 1468:
case 1336:
case 2584:
case 1408:
case 3935:
case 779:
case 3659:
case 4016:
case 1527:
case 2022:
case 1249:
case 3510:
case 1319:
case 1005:
case 1737:
case 770:
case 776:
case 2448:
case 4094:
case 1065:
case 1818:
case 1172:
case 2234:
case 1083:
case 4039:
case 255:
case 1958:
case 3554:
case 323:
case 3133:
case 1547:
case 2689:
case 1976:
case 2025:
case 447:
case 2368:
case 2809:
case 211:
case 2900:
case 3559:
case 3480:
case 3058:
case 2864:
case 2816:
case 1423:
case 1712:
case 175:
case 2343:
case 329:
case 2684:
case 2326:
case 534:
case 927:
case 2496:
case 3150:
case 1871:
case 2804:
case 1393:
case 3902:
case 2667:
case 752:
case 1244:
case 2463:
case 546:
case 1824:
case 380:
case 3905:
case 1438:
case 1366:
case 1314:
case 368:
case 701:
case 2956:
case 3965:
case 2403:
case 2155:
case 3983:
case 3114:
case 3501:
case 1920:
case 341:
case 492:
case 4009:
case 1271:
case 639:
case 2204:
case 2697:
case 3452:
case 3591:
case 3917:
case 2493:
case 1767:
case 6:
case 549:
case 389:
case 3196:
case 2589:
case 2323:
case 1647:
case 3182:
case 581:
case 3995:
case 1426:
case 2839:
case 3163:
case 3986:
case 2612:
case 1303:
case 2894:
case 2727:
case 2990:
case 2287:
case 3610:
case 3857:
case 4051:
case 1224:
case 2338:
case 3455:
case 2466:
case 1385:
case 689:
case 4068:
case 1896:
case 3927:
case 937:
case 810:
case 2089:
case 1882:
case 1404:
case 1535:
case 1464:
case 2846:
case 2823:
case 52:
case 816:
case 214:
case 2313:
case 4008:
case 3:
case 2717:
case 1745:
case 807:
case 2394:
case 1157:
case 2424:
case 198:
case 1266:
case 2795:
case 1532:
case 3620:
case 1344:
case 1683:
case 485:
case 3357:
case 2838:
case 2364:
case 1413:
case 2843:
case 584:
case 2246:
case 3171:
case 993:
case 1617:
case 212:
case 1282:
case 3576:
case 3778:
case 2783:
case 1296:
case 629:
case 2304:
case 3947:
case 425:
case 3001:
case 330:
case 1324:
case 668:
case 3640:
case 2238:
case 1866:
case 3700:
case 2444:
case 116:
case 751:
case 110:
case 1203:
case 2702:
case 1439:
case 3760:
case 680:
case 336:
case 1725:
case 2642:
case 1901:
case 1329:
case 1583:
case 3118:
case 945:
case 2449:
case 1318:
case 1248:
case 2870:
case 748:
case 999:
case 4023:
case 1833:
case 1635:
case 1236:
case 1562:
case 2309:
case 1959:
case 2015:
case 3054:
case 2270:
case 2067:
case 2399:
case 1592:
case 1451:
case 990:
case 3381:
case 1788:
case 3540:
case 2007:
case 2735:
case 1349:
case 1027:
case 3658:
case 1595:
case 3275:
case 113:
case 1233:
case 1517:
case 1991:
case 4026:
case 1469:
case 4043:
case 333:
case 3031:
case 1924:
case 3110:
case 908:
case 3528:
case 803:
case 3743:
case 3726:
case 2987:
case 2290:
case 3663:
case 3865:
case 1820:
case 3883:
case 1572:
case 1240:
case 3286:
case 396:
case 3696:
case 705:
case 3862:
case 3154:
case 2431:
case 1575:
case 1147:
case 1354:
case 2860:
case 422:
case 484:
case 3347:
case 2197:
case 2904:
case 1971:
case 2410:
case 1840:
case 1220:
case 318:
case 3666:
case 2853:
case 2655:
case 2994:
case 585:
case 2107:
case 2256:
case 3892:
case 345:
case 2167:
case 138:
case 3049:
case 3548:
case 1944:
case 3746:
case 1780:
case 3202:
case 2260:
case 2077:
case 3327:
case 997:
case 3415:
case 3817:
case 431:
case 4011:
case 3738:
case 261:
case 1127:
case 3895:
case 591:
case 1331:
case 3497:
case 2341:
case 94:
case 806:
case 4060:
case 944:
case 20:
case 2459:
case 2580:
case 1391:
case 627:
case 1675:
case 3798:
case 4078:
case 2461:
case 2999:
case 4056:
case 3619:
case 936:
case 930:
case 3503:
case 2401:
case 2830:
case 1949:
case 3628:
case 3044:
case 2552:
case 2969:
case 939:
case 3593:
case 3159:
case 2772:
case 2811:
case 3770:
case 2137:
case 337:
case 3489:
case 942:
case 1359:
case 2951:
case 2374:
case 1929:
case 3161:
case 3506:
case 809:
case 712:
case 3768:
case 4053:
case 3566:
case 3514:
case 1361:
case 2775:
case 3050:
case 2473:
case 1358:
case 989:
case 2677:
case 3571:
case 1291:
case 637:
case 941:
case 3158:
case 201:
case 1933:
case 2968:
case 3176:
case 3093:
case 1859:
case 387:
case 2052:
case 1801:
case 711:
case 3972:
case 1919:
case 920:
case 3014:
case 3709:
case 859:
case 3524:
case 2970:
case 1861:
case 2188:
case 850:
case 3096:
case 2221:
case 1135:
case 765:
case 2841:
case 159:
case 1373:
case 3335:
case 2476:
case 1261:
case 1948:
case 3332:
case 1557:
case 1777:
case 986:
case 3003:
case 2998:
case 3063:
case 3618:
case 3085:
case 4079:
case 645:
case 3549:
case 3048:
case 3386:
case 160:
case 1903:
case 869:
case 1581:
case 3392:
case 174:
case 2353:
case 535:
case 3422:
case 188:
case 3140:
case 2390:
case 1186:
case 2938:
case 1192:
case 3827:
case 699:
case 3425:
case 481:
case 3036:
case 1982:
case 3739:
case 1460:
case 1400:
case 2923:
case 2757:
case 2946:
case 923:
case 592:
case 1117:
case 2577:
case 2145:
case 1072:
case 1165:
case 3764:
case 3518:
case 1914:
case 440:
case 1966:
case 696:
case 1906:
case 2122:
case 446:
case 690:
case 3365:
case 3704:
case 2440:
case 172:
case 1453:
case 1320:
case 958:
case 3028:
case 3529:
case 853:
case 264:
case 866:
case 3362:
case 3787:
case 888:
case 270:
case 2926:
case 1102:
case 169:
case 874:
case 3847:
case 43:
case 3445:
case 1854:
case 3227:
case 1993:
case 2360:
case 2220:
case 1410:
case 625:
case 3796:
case 1256:
case 1853:
case 713:
case 2081:
case 1890:
case 2780:
case 3222:
case 480:
case 1260:
case 3447:
case 3225:
case 3845:
case 3643:
case 3626:
case 3384:
case 161:
case 3785:
case 2127:
case 429:
case 4076:
case 848:
case 4058:
case 1200:
case 1184:
case 203:
case 335:
case 3822:
case 420:
case 3570:
case 2924:
case 861:
case 1987:
case 3793:
case 1253:
case 2752:
case 3179:
case 2572:
case 3638:
case 2820:
case 2755:
case 3766:
case 3714:
case 3568:
case 1964:
case 3397:
case 489:
case 4073:
case 3245:
case 3646:
case 1680:
case 3623:
case 1197:
case 3009:
case 2971:
case 3315:
case 3337:
case 1491:
case 3719:
case 1772:
case 3288:
case 217:
case 151:
case 934:
case 710:
case 3728:
case 1811:
case 921:
case 1374:
case 2301:
case 940:
case 3698:
case 458:
case 4040:
case 946:
case 2361:
case 804:
case 981:
case 1211:
case 3389:
case 3523:
case 932:
case 3748:
case 2675:
case 3888:
case 2873:
case 949:
case 587:
case 3141:
case 2276:
case 798:
case 1189:
case 2258:
case 4020:
case 719:
case 3039:
case 3538:
case 802:
case 2672:
case 1934:
case 1999:
case 3094:
case 2474:
case 2949:
case 3670:
case 1830:
case 2135:
case 1841:
case 2259:
case 1188:
case 3513:
case 3669:
case 1221:
case 982:
case 92:
case 2891:
case 3749:
case 2373:
case 3046:
case 1458:
case 647:
case 15:
case 3130:
case 2777:
case 2132:
case 1274:
case 3111:
case 433:
case 1473:
case 4031:
case 978:
case 3729:
case 3026:
case 3043:
case 922:
case 3289:
case 984:
case 3718:
case 1968:
case 3564:
case 3516:
case 757:
case 256:
case 854:
case 2801:
case 408:
case 775:
case 1055:
case 3587:
case 3432:
case 1970:
case 2928:
case 3156:
case 1879:
case 385:
case 862:
case 2966:
case 3178:
case 2183:
case 228:
case 3771:
case 1356:
case 272:
case 3486:
case 2810:
case 2906:
case 3070:
case 2453:
case 2320:
case 3267:
case 1378:
case 545:
case 1300:
case 2231:
case 4:
case 1926:
case 692:
case 439:
case 176:
case 3325:
case 2075:
case 3100:
case 2162:
case 442:
case 3284:
case 3815:
case 3613:
case 1360:
case 3417:
case 3952:
case 2456:
case 2340:
case 260:
case 1353:
case 2478:
case 27:
case 2903:
case 2210:
case 590:
case 3687:
case 1142:
case 596:
case 3098:
case 2186:
case 870:
case 4001:
case 2985:
case 179:
case 3153:
case 86:
case 3807:
case 430:
case 864:
case 1938:
case 2192:
case 3342:
case 1279:
case 3616:
case 3215:
case 44:
case 444:
case 3297:
case 1757:
case 694:
case 1946:
case 3462:
case 2117:
case 3604:
case 953:
case 1691:
case 3333:
case 1375:
case 2701:
case 123:
case 2641:
case 3062:
case 3547:
case 3175:
case 1554:
case 3328:
case 3083:
case 1119:
case 2759:
case 3172:
case 2056:
case 3005:
case 1510:
case 1281:
case 3829:
case 883:
case 988:
case 613:
case 3527:
case 2621:
case 725:
case 3095:
case 451:
case 2988:
case 3336:
case 402:
case 969:
case 1531:
case 1661:
case 928:
case 3849:
case 3092:
case 1741:
case 3086:
case 1601:
case 3844:
case 3385:
case 1857:
case 2030:
case 3224:
case 1103:
case 956:
case 2731:
case 1185:
case 415:
case 1163:
case 1986:
case 3784:
case 1995:
case 278:
case 1182:
case 2541:
case 1196:
case 3035:
case 3707:
case 1452:
case 1917:
case 222:
case 2123:
case 284:
case 886:
case 1114:
case 1501:
case 2574:
case 186:
case 3715:
case 3306:
case 3314:
case 1905:
case 3824:
case 610:
case 1106:
case 1561:
case 959:
case 3393:
case 2143:
case 514:
case 1902:
case 22:
case 3871:
case 2710:
case 4077:
case 282:
case 1150:
case 231:
case 375:
case 1193:
case 607:
case 461:
case 1480:
case 1058:
case 1559:
case 3446:
case 3423:
case 3350:
case 3712:
case 1962:
case 2521:
case 820:
case 2187:
case 3725:
case 3806:
case 1760:
case 3910:
case 310:
case 3203:
case 2690:
case 316:
case 2912:
case 3263:
case 2457:
case 3692:
case 3814:
case 2653:
case 1700:
case 2855:
case 8:
case 295:
case 3285:
case 1001:
case 479:
case 130:
case 2074:
case 675:
case 3296:
case 2852:
case 1947:
case 2915:
case 3954:
case 281:
case 2720:
case 1778:
case 2164:
case 2511:
case 2997:
case 3722:
case 249:
case 1357:
case 3487:
case 3532:
case 1620:
case 2194:
case 3683:
case 2255:
case 3214:
case 3266:
case 900:
case 2139:
case 2656:
case 240:
case 844:
case 3157:
case 3803:
case 84:
case 1144:
case 3206:
case 3745:
case 3250:
case 46:
case 917:
case 830:
case 1091:
case 3464:
case 3416:
case 2880:
case 3742:
case 3882:
case 3535:
case 221:
case 1573:
case 1927:
case 2600:
case 836:
case 319:
case 3662:
case 2041:
case 452:
case 2611:
case 3517:
case 667:
case 1676:
case 2989:
case 3836:
case 1275:
case 3595:
case 3586:
case 3349:
case 3788:
case 2773:
case 577:
case 555:
case 4055:
case 3592:
case 3451:
case 1381:
case 3219:
case 971:
case 3228:
case 794:
case 3959:
case 1054:
case 3562:
case 2500:
case 1875:
case 3236:
case 2169:
case 3833:
case 3635:
case 2109:
case 808:
case 2560:
case 3502:
case 2937:
case 735:
case 454:
case 3828:
case 3961:
case 2630:
case 3318:
case 3565:
case 3819:
case 473:
case 2758:
case 3901:
case 938:
case 833:
case 2578:
case 3583:
case 1118:
case 1520:
case 283:
case 2659:
case 3269:
case 964:
case 1988:
case 417:
case 2935:
case 3045:
case 1475:
case 1877:
case 976:
case 400:
case 3930:
case 1090:
case 3398:
case 2881:
case 3428:
case 258:
case 1674:
case 3507:
case 2040:
case 1198:
case 3834:
case 2375:
case 3025:
case 2691:
case 3597:
case 3689:
case 962:
case 409:
case 1701:
case 3515:
case 1641:
case 1000:
case 1579:
case 3370:
case 2119:
case 355:
case 1056:
case 3448:
case 1759:
case 3299:
case 2128:
case 979:
case 3851:
case 3155:
case 2166:
case 88:
case 3978:
case 1574:
case 1754:
case 3294:
case 3747:
case 3956:
case 2965:
case 4081:
case 2905:
case 3887:
case 3667:
case 2257:
case 12:
case 3482:
case 1710:
case 1143:
case 124:
case 612:
case 2902:
case 3537:
case 1011:
case 1925:
case 2150:
case 3343:
case 2193:
case 3326:
case 2076:
case 2480:
case 3864:
case 2857:
case 510:
case 1942:
case 3338:
case 2103:
case 1731:
case 2992:
case 1138:
case 3894:
case 3953:
case 2185:
case 3727:
case 365:
case 226:
case 727:
case 2986:
case 471:
case 824:
case 2163:
case 516:
case 1679:
case 3216:
case 2182:
case 1541:
case 3615:
case 2995:
case 289:
case 507:
case 3323:
case 2073:
case 952:
case 2591:
case 2917:
case 3493:
case 1945:
case 184:
case 241:
case 3180:
case 614:
case 18:
case 122:
case 3204:
case 1123:
case 2620:
case 1678:
case 4072:
case 3838:
case 1656:
case 428:
case 1255:
case 3394:
case 472:
case 146:
case 881:
case 3717:
case 3622:
case 1967:
case 3313:
case 951:
case 31:
case 3846:
case 3823:
case 239:
case 2091:
case 1984:
case 121:
case 3089:
case 4075:
case 1740:
case 13:
case 2927:
case 134:
case 575:
case 83:
case 1187:
case 821:
case 3702:
case 47:
case 1855:
case 2700:
case 1457:
case 2001:
case 3979:
case 230:
case 3238:
case 2640:
case 466:
case 2558:
case 2059:
case 3765:
case 2756:
case 3304:
case 132:
case 1852:
case 24:
case 1164:
case 846:
case 244:
case 1720:
case 3783:
case 840:
case 2171:
case 3246:
case 312:
case 3364:
case 3705:
case 3309:
case 297:
case 796:
case 3868:
case 2054:
case 2477:
case 459:
case 2673:
case 567:
case 143:
case 790:
case 3369:
case 1937:
case 1630:
case 3522:
case 2711:
case 3870:
case 2129:
case 3012:
case 3298:
case 1758:
case 3449:
case 1776:
case 305:
case 1578:
case 2520:
case 3208:
case 2031:
case 1611:
case 745:
case 3545:
case 2730:
case 2275:
case 3732:
case 3084:
case 1989:
case 2658:
case 1773:
case 3735:
case 2540:
case 1199:
case 208:
case 799:
case 3429:
case 2149:
case 3067:
case 450:
case 3418:
case 915:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758369602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,];
var gg_b = "1758369602/";

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
