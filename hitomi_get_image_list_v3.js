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
case 3461:
case 2373:
case 3326:
case 1387:
case 672:
case 1408:
case 1849:
case 3360:
case 1718:
case 1801:
case 1645:
case 2806:
case 1612:
case 1647:
case 2056:
case 2724:
case 3403:
case 4054:
case 358:
case 760:
case 2469:
case 2972:
case 2136:
case 3551:
case 1861:
case 3401:
case 1314:
case 1033:
case 947:
case 934:
case 1796:
case 3379:
case 1468:
case 1446:
case 2791:
case 2820:
case 3463:
case 2441:
case 125:
case 2328:
case 2156:
case 3531:
case 2022:
case 854:
case 766:
case 2409:
case 821:
case 2470:
case 1131:
case 2559:
case 2719:
case 174:
case 1053:
case 149:
case 1988:
case 2746:
case 2175:
case 4084:
case 2496:
case 2177:
case 186:
case 1231:
case 3684:
case 355:
case 371:
case 3893:
case 2304:
case 340:
case 797:
case 3474:
case 1588:
case 3344:
case 237:
case 244:
case 3416:
case 64:
case 1770:
case 1898:
case 395:
case 3188:
case 1709:
case 47:
case 3706:
case 113:
case 702:
case 1741:
case 431:
case 1491:
case 1357:
case 965:
case 2364:
case 2075:
case 2077:
case 801:
case 2525:
case 2418:
case 2899:
case 2186:
case 2222:
case 3617:
case 3615:
case 507:
case 105:
case 1493:
case 4042:
case 1743:
case 1769:
case 3748:
case 3766:
case 2989:
case 569:
case 3819:
case 2925:
case 1874:
case 963:
case 1233:
case 103:
case 592:
case 3088:
case 3720:
case 3891:
case 1424:
case 2695:
case 3258:
case 3382:
case 253:
case 2344:
case 819:
case 337:
case 2416:
case 2188:
case 1239:
case 2706:
case 3236:
case 733:
case 79:
case 2983:
case 1499:
case 293:
case 3496:
case 23:
case 3746:
case 1818:
case 3177:
case 647:
case 271:
case 255:
case 634:
case 1701:
case 3086:
case 3304:
case 1575:
case 735:
case 1411:
case 1025:
case 682:
case 75:
case 2583:
case 1027:
case 1259:
case 3602:
case 4050:
case 1986:
case 2766:
case 2819:
case 3925:
case 1703:
case 3650:
case 2088:
case 848:
case 3697:
case 50:
case 132:
case 3075:
case 3364:
case 3630:
case 1586:
case 1896:
case 561:
case 3899:
case 3708:
case 2238:
case 3811:
case 972:
case 2981:
case 1127:
case 1761:
case 3806:
case 1227:
case 1059:
case 1289:
case 3122:
case 2138:
case 1841:
case 1420:
case 1072:
case 2403:
case 1522:
case 258:
case 1321:
case 1870:
case 1448:
case 1466:
case 3469:
case 1378:
case 1798:
case 3373:
case 3443:
case 2158:
case 2533:
case 2326:
case 3036:
case 856:
case 2868:
case 2634:
case 381:
case 3791:
case 3820:
case 3371:
case 1159:
case 3328:
case 2332:
case 2951:
case 1172:
case 3848:
case 3559:
case 3470:
case 1936:
case 1774:
case 1394:
case 94:
case 2808:
case 3972:
case 1665:
case 1667:
case 2058:
case 2551:
case 2711:
case 170:
case 1843:
case 2401:
case 3539:
case 1536:
case 850:
case 2799:
case 331:
case 2368:
case 2195:
case 2346:
case 37:
case 2476:
case 3423:
case 2197:
case 2860:
case 1915:
case 2102:
case 3873:
case 1737:
case 2826:
case 1735:
case 1821:
case 3115:
case 1370:
case 2686:
case 1878:
case 3117:
case 3494:
case 3744:
case 1212:
case 641:
case 440:
case 1428:
case 1515:
case 1755:
case 759:
case 2130:
case 1471:
case 1757:
case 1517:
case 455:
case 3306:
case 1309:
case 1823:
case 548:
case 3688:
case 4088:
case 1984:
case 2429:
case 2852:
case 509:
case 2280:
case 1343:
case 903:
case 2485:
case 2800:
case 676:
case 3042:
case 3017:
case 3366:
case 3348:
case 2675:
case 2030:
case 3782:
case 928:
case 3871:
case 3184:
case 2832:
case 632:
case 2967:
case 458:
case 3284:
case 1787:
case 2965:
case 3804:
case 700:
case 785:
case 3054:
case 489:
case 1012:
case 1464:
case 684:
case 1045:
case 28:
case 1318:
case 3760:
case 3313:
case 498:
case 3034:
case 2324:
case 2844:
case 2262:
case 387:
case 908:
case 3547:
case 1404:
case 1653:
case 925:
case 1112:
case 1147:
case 974:
case 3399:
case 1776:
case 1396:
case 3215:
case 706:
case 3217:
case 1554:
case 3912:
case 3947:
case 2250:
case 2882:
case 3945:
case 182:
case 2391:
case 2457:
case 529:
case 2592:
case 2455:
case 3732:
case 2507:
case 2295:
case 147:
case 545:
case 82:
case 1954:
case 2490:
case 2034:
case 680:
case 3565:
case 481:
case 242:
case 3324:
case 976:
case 1167:
case 1778:
case 3844:
case 3636:
case 287:
case 1639:
case 3967:
case 1672:
case 3965:
case 1837:
case 2054:
case 2726:
case 1659:
case 3656:
case 38:
case 4056:
case 615:
case 970:
case 2912:
case 2134:
case 3882:
case 1105:
case 3457:
case 3728:
case 2658:
case 686:
case 3297:
case 1794:
case 1192:
case 714:
case 3319:
case 1316:
case 3490:
case 2311:
case 521:
case 2752:
case 130:
case 2512:
case 2547:
case 3437:
case 2545:
case 2700:
case 613:
case 827:
case 1723:
case 14:
case 2399:
case 2779:
case 3622:
case 2638:
case 2217:
case 2242:
case 2115:
case 2142:
case 2117:
case 1902:
case 4086:
case 1627:
case 1625:
case 377:
case 1432:
case 3130:
case 511:
case 791:
case 724:
case 1292:
case 1502:
case 1301:
case 1930:
case 3062:
case 3476:
case 1710:
case 3195:
case 3346:
case 1550:
case 1349:
case 1885:
case 2873:
case 1595:
case 3150:
case 1829:
case 444:
case 852:
case 1303:
case 2042:
case 807:
case 2366:
case 2840:
case 2871:
case 4075:
case 892:
case 3879:
case 1876:
case 3162:
case 1562:
case 932:
case 1361:
case 618:
case 3002:
case 3280:
case 3050:
case 3485:
case 3487:
case 3800:
case 117:
case 3223:
case 515:
case 3904:
case 2214:
case 2867:
case 753:
case 357:
case 586:
case 29:
case 1910:
case 1730:
case 302:
case 2157:
case 1377:
case 1797:
case 3294:
case 1447:
case 771:
case 1412:
case 621:
case 1795:
case 1375:
case 420:
case 3504:
case 1445:
case 2383:
case 73:
case 793:
case 397:
case 2135:
case 1750:
case 3603:
case 1104:
case 654:
case 2669:
case 1228:
case 235:
case 580:
case 2892:
case 2582:
case 528:
case 2090:
case 2285:
case 3601:
case 4049:
case 312:
case 3649:
case 4001:
case 2229:
case 2055:
case 872:
case 967:
case 909:
case 3278:
case 3221:
case 3010:
case 1164:
case 192:
case 4063:
case 3845:
case 746:
case 2982:
case 1854:
case 2037:
case 3389:
case 426:
case 3564:
case 3327:
case 169:
case 2960:
case 1028:
case 1780:
case 2696:
case 1071:
case 3484:
case 238:
case 956:
case 360:
case 758:
case 3973:
case 3094:
case 485:
case 789:
case 2353:
case 1264:
case 1815:
case 400:
case 2129:
case 264:
case 2560:
case 322:
case 1173:
case 3674:
case 1978:
case 66:
case 1921:
case 1619:
case 518:
case 483:
case 2462:
case 3573:
case 836:
case 1691:
case 2076:
case 3023:
case 3359:
case 1356:
case 1884:
case 1171:
case 2430:
case 3705:
case 2979:
case 1594:
case 1204:
case 3415:
case 3528:
case 2532:
case 1140:
case 3417:
case 929:
case 2952:
case 410:
case 950:
case 3021:
case 2029:
case 549:
case 2402:
case 943:
case 1994:
case 2085:
case 2450:
case 1336:
case 1523:
case 2114:
case 2290:
case 2176:
case 525:
case 2552:
case 2712:
case 1624:
case 3123:
case 990:
case 2497:
case 2351:
case 222:
case 1358:
case 3129:
case 1282:
case 364:
case 1126:
case 3185:
case 1052:
case 2616:
case 3187:
case 1897:
case 1160:
case 3526:
case 1529:
case 609:
case 1895:
case 3076:
case 1079:
case 1585:
case 478:
case 1587:
case 1699:
case 1338:
case 1611:
case 2178:
case 2094:
case 1985:
case 1987:
case 2121:
case 2767:
case 3257:
case 1514:
case 1754:
case 3402:
case 2698:
case 3085:
case 3450:
case 3579:
case 1576:
case 3087:
case 2339:
case 1152:
case 414:
case 921:
case 3500:
case 3114:
case 1613:
case 3932:
case 2971:
case 868:
case 1862:
case 3176:
case 1179:
case 2123:
case 3351:
case 3747:
case 2359:
case 266:
case 1132:
case 1976:
case 3618:
case 1734:
case 3237:
case 3331:
case 2528:
case 2792:
case 2417:
case 2571:
case 847:
case 834:
case 2210:
case 3952:
case 1535:
case 2294:
case 473:
case 2504:
case 11:
case 2110:
case 491:
case 3383:
case 1957:
case 3135:
case 297:
case 4069:
case 35:
case 335:
case 1232:
case 1666:
case 1990:
case 643:
case 1935:
case 1144:
case 1557:
case 744:
case 1717:
case 475:
case 451:
case 1492:
case 650:
case 911:
case 1715:
case 3190:
case 629:
case 1555:
case 3867:
case 1407:
case 2434:
case 257:
case 645:
case 1880:
case 3544:
case 1388:
case 3157:
case 1082:
case 1590:
case 3155:
case 2278:
case 2221:
case 10:
case 4009:
case 3641:
case 532:
case 2845:
case 3035:
case 2564:
case 2389:
case 96:
case 2325:
case 1467:
case 865:
case 1465:
case 1044:
case 901:
case 3381:
case 161:
case 1784:
case 2601:
case 1226:
case 656:
case 2614:
case 1208:
case 742:
case 3261:
case 383:
case 3198:
case 2513:
case 2753:
case 1019:
case 1481:
case 4094:
case 156:
case 1640:
case 460:
case 3694:
case 3883:
case 1628:
case 3203:
case 2733:
case 3593:
case 2999:
case 3305:
case 143:
case 1574:
case 1516:
case 1756:
case 3519:
case 3759:
case 927:
case 3174:
case 2629:
case 190:
case 3249:
case 1268:
case 2911:
case 1246:
case 2731:
case 3116:
case 3201:
case 2685:
case 3772:
case 870:
case 2599:
case 2827:
case 310:
case 4021:
case 1736:
case 2825:
case 534:
case 2241:
case 1916:
case 145:
case 129:
case 2475:
case 2312:
case 2511:
case 2018:
case 1483:
case 2270:
case 3003:
case 1431:
case 3853:
case 2506:
case 2069:
case 1330:
case 1901:
case 291:
case 3163:
case 3946:
case 2109:
case 273:
case 3216:
case 3101:
case 1219:
case 1963:
case 62:
case 3274:
case 1451:
case 1775:
case 1146:
case 362:
case 1395:
case 3149:
case 224:
case 1501:
case 2043:
case 3061:
case 1302:
case 1291:
case 3546:
case 2637:
case 2070:
case 3908:
case 2169:
case 3610:
case 832:
case 1293:
case 3438:
case 2859:
case 2566:
case 563:
case 2009:
case 412:
case 1561:
case 952:
case 907:
case 2655:
case 3508:
case 3727:
case 3161:
case 1224:
case 565:
case 2143:
case 3458:
case 3725:
case 2690:
case 2948:
case 3789:
case 2966:
case 3783:
case 111:
case 2101:
case 1941:
case 2833:
case 2274:
case 3906:
case 262:
case 2149:
case 1909:
case 1970:
case 299:
case 3436:
case 435:
case 777:
case 1541:
case 739:
case 627:
case 2853:
case 3296:
case 1299:
case 45:
case 3506:
case 3141:
case 288:
case 1459:
case 3456:
case 813:
case 1211:
case 1106:
case 1788:
case 1543:
case 101:
case 2851:
case 4055:
case 2298:
case 572:
case 2508:
case 3143:
case 1644:
case 2161:
case 2727:
case 805:
case 1836:
case 2725:
case 828:
case 3690:
case 1213:
case 3966:
case 961:
case 1969:
case 4035:
case 3520:
case 226:
case 4037:
case 1148:
case 3872:
case 3169:
case 3422:
case 2438:
case 1006:
case 1120:
case 1569:
case 3486:
case 1489:
case 285:
case 200:
case 1758:
case 2694:
case 1427:
case 3096:
case 2883:
case 78:
case 3269:
case 1248:
case 216:
case 1877:
case 669:
case 378:
case 1113:
case 4014:
case 2623:
case 2261:
case 536:
case 2198:
case 2074:
case 1600:
case 304:
case 692:
case 2524:
case 1652:
case 3599:
case 3209:
case 3825:
case 1111:
case 194:
case 2919:
case 1354:
case 2621:
case 3889:
case 1886:
case 2678:
case 3345:
case 3511:
case 3751:
case 3477:
case 206:
case 3312:
case 617:
case 2488:
case 808:
case 1996:
case 1660:
case 154:
case 1334:
case 825:
case 849:
case 4085:
case 2174:
case 2249:
case 4087:
case 3911:
case 3629:
case 1626:
case 2201:
case 2116:
case 530:
case 121:
case 2772:
case 2591:
case 137:
case 179:
case 2390:
case 2898:
case 55:
case 859:
case 3975:
case 3239:
case 3977:
case 3499:
case 1768:
case 3310:
case 1746:
case 2988:
case 3749:
case 939:
case 286:
case 3272:
case 2183:
case 59:
case 3701:
case 1304:
case 1086:
case 3575:
case 3411:
case 3025:
case 3027:
case 215:
case 3259:
case 1256:
case 826:
case 2816:
case 1925:
case 2233:
case 1650:
case 1927:
case 203:
case 761:
case 1695:
case 332:
case 1364:
case 1075:
case 2253:
case 687:
case 3586:
case 1630:
case 1525:
case 1899:
case 2083:
case 1527:
case 3189:
case 1186:
case 280:
case 1811:
case 3125:
case 3761:
case 2493:
case 205:
case 3225:
case 1724:
case 3227:
case 2647:
case 3059:
case 1122:
case 3289:
case 218:
case 3841:
case 3420:
case 2863:
case 98:
case 2538:
case 3870:
case 2153:
case 564:
case 1469:
case 3448:
case 3378:
case 3798:
case 1443:
case 4092:
case 800:
case 2408:
case 5:
case 2849:
case 2718:
case 538:
case 2051:
case 376:
case 2801:
case 816:
case 1791:
case 1371:
case 1156:
case 1328:
case 208:
case 1409:
case 3406:
case 1866:
case 3172:
case 1719:
case 3716:
case 3556:
case 67:
case 1470:
case 1939:
case 3936:
case 249:
case 1275:
case 631:
case 430:
case 1277:
case 3774:
case 3667:
case 3139:
case 4067:
case 1136:
case 223:
case 4065:
case 810:
case 341:
case 3956:
case 2033:
case 2314:
case 2151:
case 1680:
case 806:
case 2446:
case 2468:
case 2376:
case 1326:
case 1533:
case 1158:
case 2039:
case 3387:
case 560:
case 3385:
case 2692:
case 1868:
case 3849:
case 987:
case 1360:
case 3558:
case 198:
case 3938:
case 2922:
case 2225:
case 2059:
case 3612:
case 2227:
case 318:
case 4012:
case 2289:
case 878:
case 3863:
case 2072:
case 3031:
case 3958:
case 2870:
case 2321:
case 3153:
case 2378:
case 804:
case 2448:
case 2667:
case 1931:
case 323:
case 1711:
case 1551:
case 677:
case 241:
case 1401:
case 3314:
case 727:
case 2956:
case 566:
case 2536:
case 3151:
case 2323:
case 1799:
case 3376:
case 3468:
case 1463:
case 468:
case 308:
case 1951:
case 2406:
case 3283:
case 2556:
case 349:
case 2936:
case 814:
case 2774:
case 2749:
case 3988:
case 13:
case 502:
case 2499:
case 2818:
case 2272:
case 2701:
case 3231:
case 155:
case 171:
case 1893:
case 2577:
case 3335:
case 851:
case 2259:
case 1583:
case 315:
case 1474:
case 3588:
case 3251:
case 97:
case 153:
case 597:
case 3419:
case 3390:
case 931:
case 717:
case 1706:
case 1824:
case 873:
case 891:
case 1983:
case 3357:
case 2763:
case 512:
case 3083:
case 1238:
case 1617:
case 328:
case 2125:
case 2127:
case 3493:
case 1748:
case 1766:
case 2986:
case 3816:
case 707:
case 2703:
case 1720:
case 2413:
case 3424:
case 1258:
case 232:
case 1382:
case 3005:
case 1565:
case 3857:
case 3482:
case 1180:
case 3890:
case 3165:
case 646:
case 3092:
case 1844:
case 3580:
case 1262:
case 1967:
case 3672:
case 2785:
case 1393:
case 4072:
case 3837:
case 3659:
case 336:
case 2045:
case 2464:
case 2810:
case 4059:
case 1882:
case 1592:
case 640:
case 1771:
case 1457:
case 1080:
case 671:
case 247:
case 1295:
case 1507:
case 234:
case 3794:
case 3444:
case 721:
case 3192:
case 693:
case 63:
case 1435:
case 1992:
case 794:
case 2653:
case 514:
case 2112:
case 2147:
case 1905:
case 2776:
case 1622:
case 653:
case 2714:
case 2370:
case 2821:
case 4025:
case 2790:
case 2440:
case 3689:
case 2247:
case 575:
case 3950:
case 3627:
case 2755:
case 3432:
case 524:
case 2517:
case 2309:
case 3997:
case 3292:
case 3301:
case 591:
case 1346:
case 1195:
case 3710:
case 2915:
case 2917:
case 1704:
case 3595:
case 1150:
case 2681:
case 3829:
case 2735:
case 1826:
case 3452:
case 3205:
case 3303:
case 698:
case 2369:
case 812:
case 1677:
case 372:
case 1675:
case 2683:
case 1832:
case 2823:
case 3460:
case 263:
case 3876:
case 1879:
case 658:
case 3267:
case 689:
case 2984:
case 1764:
case 1097:
case 3814:
case 484:
case 2343:
case 1485:
case 1050:
case 1487:
case 559:
case 995:
case 2301:
case 2930:
case 520:
case 2502:
case 953:
case 2710:
case 2400:
case 835:
case 3917:
case 4081:
case 3737:
case 1234:
case 85:
case 2597:
case 599:
case 3440:
case 3790:
case 1115:
case 3370:
case 719:
case 3878:
case 1117:
case 2902:
case 1142:
case 1494:
case 3428:
case 3755:
case 562:
case 3341:
case 1254:
case 3757:
case 3517:
case 3309:
case 1306:
case 2997:
case 940:
case 89:
case 3823:
case 2460:
case 1688:
case 2876:
case 2267:
case 2426:
case 3343:
case 681:
case 480:
case 1042:
case 1017:
case 3584:
case 946:
case 1320:
case 3683:
case 1184:
case 1828:
case 1284:
case 3785:
case 2672:
case 2837:
case 864:
case 756:
case 1804:
case 3729:
case 1726:
case 2835:
case 1054:
case 236:
case 418:
case 3810:
case 3318:
case 2980:
case 4051:
case 1313:
case 2857:
case 2005:
case 796:
case 2721:
case 998:
case 2778:
case 2398:
case 2092:
case 2639:
case 187:
case 500:
case 474:
case 1311:
case 449:
case 3404:
case 1154:
case 3112:
case 3145:
case 1779:
case 24:
case 1215:
case 679:
case 750:
case 637:
case 644:
case 368:
case 3554:
case 1242:
case 1638:
case 1947:
case 1945:
case 382:
case 1732:
case 4033:
case 506:
case 334:
case 3534:
case 1658:
case 2065:
case 2794:
case 510:
case 3954:
case 2316:
case 164:
case 3000:
case 3802:
case 2978:
case 1187:
case 626:
case 1333:
case 3529:
case 1526:
case 3079:
case 3585:
case 3587:
case 904:
case 842:
case 2071:
case 581:
case 3699:
case 3830:
case 2578:
case 3338:
case 2521:
case 1926:
case 2040:
case 887:
case 2815:
case 4011:
case 1353:
case 3987:
case 3100:
case 620:
case 3514:
case 3754:
case 770:
case 1450:
case 2994:
case 3576:
case 2523:
case 1087:
case 1500:
case 1114:
case 1495:
case 3179:
case 1745:
case 1497:
case 2624:
case 1712:
case 2356:
case 2128:
case 1430:
case 2594:
case 1979:
case 3976:
case 1618:
case 3734:
case 1900:
case 662:
case 1532:
case 32:
case 2412:
case 3535:
case 2377:
case 2445:
case 2375:
case 3620:
case 1383:
case 1135:
case 2104:
case 15:
case 2750:
case 2510:
case 135:
case 3990:
case 1276:
case 3935:
case 3279:
case 217:
case 3144:
case 3937:
case 1214:
case 606:
case 3557:
case 3492:
case 3715:
case 3407:
case 133:
case 3405:
case 1544:
case 2910:
case 3388:
case 411:
case 2730:
case 3082:
case 610:
case 2164:
case 30:
case 4006:
case 3606:
case 46:
case 2854:
case 1670:
case 1035:
case 683:
case 3044:
case 1582:
case 252:
case 616:
case 1090:
case 1285:
case 1287:
case 361:
case 3182:
case 600:
case 1229:
case 1057:
case 2668:
case 401:
case 2834:
case 685:
case 1480:
case 317:
case 839:
case 2144:
case 2557:
case 2555:
case 2715:
case 540:
case 2880:
case 999:
case 1434:
case 2252:
case 555:
case 2200:
case 3730:
case 102:
case 713:
case 3377:
case 3447:
case 1110:
case 3064:
case 21:
case 786:
case 1504:
case 614:
case 3240:
case 197:
case 419:
case 920:
case 3750:
case 595:
case 2648:
case 2666:
case 553:
case 3228:
case 2044:
case 2465:
case 352:
case 467:
case 1601:
case 4068:
case 4046:
case 261:
case 3646:
case 3668:
case 2182:
case 703:
case 926:
case 1010:
case 1663:
case 20:
case 1845:
case 3762:
case 1847:
case 705:
case 3854:
case 1389:
case 3386:
case 780:
case 1327:
case 678:
case 1325:
case 369:
case 728:
case 3028:
case 3780:
case 2699:
case 1484:
case 2830:
case 985:
case 3521:
case 3040:
case 2611:
case 2985:
case 1094:
case 456:
case 916:
case 2126:
case 4019:
case 2282:
case 2000:
case 122:
case 2358:
case 1674:
case 2850:
case 2802:
case 3921:
case 1616:
case 2529:
case 2160:
case 2895:
case 1573:
case 2585:
case 1023:
case 2132:
case 3128:
case 3356:
case 1540:
case 1359:
case 3884:
case 3171:
case 2976:
case 450:
case 3204:
case 1415:
case 3140:
case 445:
case 4093:
case 1194:
case 1078:
case 22:
case 1210:
case 2026:
case 1940:
case 673:
case 723:
case 2576:
case 3523:
case 1339:
case 691:
case 1928:
case 2060:
case 1971:
case 1123:
case 2963:
case 1783:
case 3941:
case 855:
case 893:
case 83:
case 3682:
case 124:
case 151:
case 2501:
case 1043:
case 3970:
case 539:
case 2858:
case 840:
case 99:
case 933:
case 2563:
case 3472:
case 1170:
case 3315:
case 2431:
case 1296:
case 3066:
case 2664:
case 935:
case 1141:
case 2901:
case 2838:
case 3459:
case 3788:
case 2949:
case 3020:
case 41:
case 3106:
case 2362:
case 3543:
case 301:
case 2433:
case 1655:
case 1920:
case 1657:
case 461:
case 2046:
case 1143:
case 3644:
case 2224:
case 3836:
case 267:
case 2786:
case 4044:
case 1966:
case 1948:
case 1637:
case 1781:
case 2961:
case 1070:
case 2453:
case 3148:
case 3166:
case 1041:
case 36:
case 2293:
case 1859:
case 3856:
case 1422:
case 3120:
case 622:
case 1548:
case 1566:
case 3569:
case 2640:
case 3011:
case 3220:
case 256:
case 3427:
case 2193:
case 3099:
case 3248:
case 1269:
case 3632:
case 1913:
case 3877:
case 4032:
case 1118:
case 3875:
case 736:
case 4079:
case 2598:
case 2722:
case 2208:
case 178:
case 1614:
case 3113:
case 3918:
case 2380:
case 1243:
case 2091:
case 3679:
case 1676:
case 858:
case 104:
case 3600:
case 1753:
case 2019:
case 889:
case 2481:
case 1827:
case 3596:
case 2736:
case 42:
case 2916:
case 1241:
case 229:
case 1475:
case 1196:
case 1751:
case 1477:
case 1347:
case 74:
case 2483:
case 2516:
case 4060:
case 2191:
case 697:
case 1911:
case 2268:
case 3626:
case 114:
case 1731:
case 4026:
case 321:
case 1687:
case 2918:
case 1623:
case 3091:
case 1365:
case 1367:
case 1016:
case 3019:
case 1524:
case 356:
case 3640:
case 4040:
case 2425:
case 2518:
case 3193:
case 1883:
case 116:
case 2632:
case 2266:
case 2248:
case 2877:
case 960:
case 2875:
case 1305:
case 1488:
case 427:
case 2334:
case 1307:
case 254:
case 635:
case 2660:
case 65:
case 3024:
case 1759:
case 782:
case 3756:
case 3191:
case 1174:
case 1098:
case 390:
case 2626:
case 3268:
case 1249:
case 1201:
case 1772:
case 1392:
case 2596:
case 3974:
case 110:
case 294:
case 2111:
case 3736:
case 1621:
case 1263:
case 69:
case 633:
case 1678:
case 345:
case 768:
case 106:
case 3483:
case 2342:
case 1853:
case 319:
case 2048:
case 1163:
case 2822:
case 3838:
case 2459:
case 159:
case 3949:
case 1946:
case 2106:
case 2211:
case 120:
case 3219:
case 1216:
case 1101:
case 2941:
case 211:
case 3777:
case 3451:
case 2909:
case 3395:
case 902:
case 3302:
case 2970:
case 2439:
case 199:
case 1568:
case 3350:
case 3549:
case 3008:
case 1103:
case 1831:
case 3453:
case 4004:
case 1063:
case 26:
case 492:
case 3503:
case 1438:
case 2856:
case 664:
case 2120:
case 2384:
case 201:
case 3362:
case 2543:
case 1851:
case 6:
case 3068:
case 3046:
case 452:
case 3224:
case 912:
case 2644:
case 3903:
case 2836:
case 407:
case 2969:
case 3108:
case 1789:
case 2213:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766300401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,];
var gg_b = "1766300401/";

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
