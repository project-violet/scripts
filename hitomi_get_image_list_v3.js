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
case 14:
case 3683:
case 303:
case 2005:
case 3041:
case 319:
case 3889:
case 2176:
case 392:
case 2146:
case 311:
case 2362:
case 2200:
case 2953:
case 3278:
case 265:
case 4084:
case 658:
case 4079:
case 176:
case 2178:
case 2772:
case 1439:
case 2211:
case 70:
case 3330:
case 446:
case 3378:
case 1338:
case 4088:
case 290:
case 994:
case 1798:
case 1625:
case 1019:
case 1801:
case 3900:
case 1737:
case 3404:
case 18:
case 231:
case 686:
case 2530:
case 3777:
case 962:
case 4094:
case 579:
case 1705:
case 4030:
case 49:
case 1131:
case 2513:
case 2321:
case 2720:
case 2996:
case 3999:
case 2088:
case 1297:
case 3236:
case 3402:
case 1463:
case 97:
case 2322:
case 4040:
case 2177:
case 777:
case 1504:
case 1573:
case 4083:
case 4095:
case 2013:
case 2888:
case 2159:
case 3691:
case 3916:
case 1628:
case 3062:
case 2890:
case 3185:
case 1510:
case 3058:
case 571:
case 3790:
case 2611:
case 1727:
case 2970:
case 391:
case 3269:
case 3533:
case 3812:
case 475:
case 3698:
case 2285:
case 1389:
case 952:
case 2034:
case 2062:
case 490:
case 1912:
case 1728:
case 1794:
case 66:
case 2641:
case 1174:
case 1091:
case 1623:
case 3764:
case 3450:
case 3853:
case 2493:
case 1657:
case 2374:
case 2749:
case 3912:
case 3459:
case 3210:
case 2732:
case 3970:
case 2442:
case 2093:
case 1795:
case 3846:
case 3137:
case 1940:
case 1592:
case 693:
case 1195:
case 4078:
case 3563:
case 423:
case 1222:
case 564:
case 3085:
case 3579:
case 3644:
case 1032:
case 224:
case 597:
case 3320:
case 699:
case 3372:
case 1834:
case 2850:
case 32:
case 1906:
case 2767:
case 1717:
case 2547:
case 3587:
case 3524:
case 1643:
case 1395:
case 1507:
case 1676:
case 844:
case 95:
case 1557:
case 1586:
case 2572:
case 2463:
case 913:
case 159:
case 1842:
case 1054:
case 9:
case 3304:
case 63:
case 42:
case 503:
case 1673:
case 1743:
case 1462:
case 2355:
case 323:
case 1250:
case 1069:
case 182:
case 261:
case 3290:
case 2040:
case 327:
case 2555:
case 1347:
case 1960:
case 1213:
case 3454:
case 1961:
case 4043:
case 1693:
case 3616:
case 1680:
case 1469:
case 1698:
case 190:
case 1003:
case 3010:
case 1603:
case 2704:
case 3904:
case 739:
case 429:
case 596:
case 3228:
case 1358:
case 1329:
case 3134:
case 1334:
case 1326:
case 2937:
case 735:
case 2759:
case 810:
case 1256:
case 3406:
case 3543:
case 259:
case 1857:
case 1225:
case 2671:
case 2181:
case 2296:
case 1881:
case 580:
case 278:
case 830:
case 3458:
case 2617:
case 3429:
case 1841:
case 2441:
case 3607:
case 326:
case 3224:
case 3617:
case 2689:
case 1896:
case 3321:
case 2390:
case 1699:
case 1763:
case 181:
case 3247:
case 3477:
case 3786:
case 3568:
case 373:
case 2600:
case 3480:
case 730:
case 2714:
case 4018:
case 2553:
case 1788:
case 2607:
case 2335:
case 1766:
case 3067:
case 1119:
case 1426:
case 3074:
case 2435:
case 598:
case 1704:
case 3734:
case 2851:
case 842:
case 2469:
case 3011:
case 1047:
case 2349:
case 2133:
case 2122:
case 458:
case 1313:
case 1667:
case 2844:
case 3075:
case 118:
case 195:
case 156:
case 2279:
case 2315:
case 2684:
case 2327:
case 578:
case 3890:
case 2626:
case 24:
case 2154:
case 1104:
case 3996:
case 4062:
case 3631:
case 306:
case 1918:
case 3886:
case 3155:
case 1314:
case 2631:
case 759:
case 3403:
case 2698:
case 2381:
case 3351:
case 1534:
case 2687:
case 4048:
case 2577:
case 4025:
case 3013:
case 1339:
case 448:
case 4067:
case 3558:
case 3556:
case 1433:
case 1742:
case 2367:
case 704:
case 3353:
case 437:
case 2588:
case 3308:
case 3891:
case 2414:
case 2348:
case 857:
case 3582:
case 1560:
case 1155:
case 1514:
case 3689:
case 1161:
case 2765:
case 2795:
case 412:
case 3080:
case 2929:
case 968:
case 1407:
case 108:
case 2828:
case 958:
case 690:
case 1345:
case 3856:
case 3842:
case 80:
case 731:
case 793:
case 305:
case 1312:
case 3792:
case 1962:
case 838:
case 2473:
case 3978:
case 2063:
case 1143:
case 2549:
case 168:
case 2118:
case 376:
case 3375:
case 2893:
case 1072:
case 3522:
case 613:
case 3920:
case 1473:
case 1343:
case 3944:
case 3908:
case 2103:
case 367:
case 1725:
case 1050:
case 889:
case 3507:
case 276:
case 2643:
case 1152:
case 512:
case 4091:
case 1372:
case 3677:
case 1574:
case 218:
case 1383:
case 504:
case 786:
case 1248:
case 732:
case 4038:
case 2041:
case 1722:
case 818:
case 1173:
case 3370:
case 584:
case 2497:
case 3492:
case 256:
case 2783:
case 2139:
case 3428:
case 1444:
case 3207:
case 3740:
case 2410:
case 1209:
case 2351:
case 2332:
case 343:
case 1371:
case 468:
case 1508:
case 737:
case 2260:
case 1774:
case 2051:
case 15:
case 806:
case 1203:
case 2360:
case 2798:
case 1004:
case 1487:
case 1430:
case 545:
case 333:
case 2657:
case 1180:
case 401:
case 3455:
case 2120:
case 3661:
case 2081:
case 790:
case 1029:
case 2527:
case 1963:
case 1490:
case 2208:
case 1726:
case 2242:
case 3003:
case 3836:
case 883:
case 2309:
case 2412:
case 2905:
case 2061:
case 1700:
case 539:
case 2832:
case 1277:
case 2706:
case 3622:
case 2754:
case 570:
case 3597:
case 1910:
case 1773:
case 2502:
case 4041:
case 426:
case 4050:
case 1415:
case 3894:
case 1182:
case 722:
case 651:
case 417:
case 3352:
case 2556:
case 384:
case 1341:
case 1830:
case 3311:
case 216:
case 3897:
case 1097:
case 1133:
case 331:
case 2637:
case 410:
case 1581:
case 358:
case 1488:
case 2187:
case 1160:
case 2490:
case 2157:
case 292:
case 2860:
case 3474:
case 1390:
case 2152:
case 2253:
case 425:
case 51:
case 2069:
case 1723:
case 3874:
case 4076:
case 1366:
case 2104:
case 2420:
case 3513:
case 650:
case 3575:
case 814:
case 805:
case 1159:
case 1197:
case 2691:
case 2733:
case 1229:
case 2771:
case 2388:
case 851:
case 1924:
case 1112:
case 2188:
case 1522:
case 638:
case 3695:
case 3294:
case 3824:
case 2934:
case 2859:
case 2846:
case 3082:
case 569:
case 3565:
case 1821:
case 740:
case 1263:
case 3305:
case 93:
case 3139:
case 1732:
case 3235:
case 2960:
case 4042:
case 778:
case 2625:
case 2510:
case 1018:
case 2665:
case 953:
case 2356:
case 3762:
case 117:
case 2221:
case 3393:
case 1846:
case 2719:
case 3475:
case 1610:
case 4007:
case 1627:
case 2825:
case 3004:
case 1058:
case 1360:
case 3902:
case 2357:
case 3751:
case 1349:
case 1492:
case 701:
case 1907:
case 2353:
case 1649:
case 3047:
case 1532:
case 949:
case 3160:
case 2262:
case 3963:
case 3707:
case 1671:
case 2015:
case 606:
case 2837:
case 1730:
case 3442:
case 820:
case 1525:
case 1822:
case 4031:
case 348:
case 2008:
case 1810:
case 998:
case 3462:
case 3867:
case 148:
case 1687:
case 1939:
case 1932:
case 3452:
case 3198:
case 2205:
case 378:
case 2716:
case 3534:
case 1843:
case 270:
case 1745:
case 3309:
case 3103:
case 221:
case 2564:
case 983:
case 3705:
case 3272:
case 3542:
case 363:
case 2175:
case 933:
case 1809:
case 1739:
case 2452:
case 1542:
case 742:
case 114:
case 2230:
case 1175:
case 1215:
case 3961:
case 1037:
case 3496:
case 154:
case 94:
case 3395:
case 2835:
case 275:
case 595:
case 1866:
case 2354:
case 3415:
case 4093:
case 3896:
case 1031:
case 3242:
case 3039:
case 189:
case 3847:
case 3319:
case 102:
case 2969:
case 3464:
case 2467:
case 971:
case 553:
case 3234:
case 162:
case 3837:
case 2445:
case 3951:
case 3420:
case 3865:
case 3127:
case 300:
case 2734:
case 443:
case 1419:
case 2670:
case 1279:
case 3657:
case 2418:
case 109:
case 2986:
case 1016:
case 1300:
case 1012:
case 1666:
case 2037:
case 2838:
case 895:
case 398:
case 473:
case 497:
case 3193:
case 3651:
case 1675:
case 2921:
case 1249:
case 90:
case 3180:
case 2344:
case 870:
case 3956:
case 3713:
case 872:
case 3343:
case 77:
case 3484:
case 2593:
case 1244:
case 1127:
case 2303:
case 3789:
case 357:
case 2421:
case 641:
case 3174:
case 3748:
case 3626:
case 2056:
case 2500:
case 4008:
case 2955:
case 2586:
case 2995:
case 1941:
case 2158:
case 1997:
case 1251:
case 2562:
case 1024:
case 607:
case 3419:
case 709:
case 3221:
case 2264:
case 1779:
case 2737:
case 1780:
case 1825:
case 2667:
case 2578:
case 467:
case 2033:
case 1468:
case 3888:
case 1405:
case 250:
case 1935:
case 1013:
case 274:
case 1184:
case 217:
case 2419:
case 3331:
case 2503:
case 145:
case 399:
case 2481:
case 3445:
case 2276:
case 430:
case 1423:
case 2583:
case 2673:
case 965:
case 1449:
case 485:
case 2198:
case 1709:
case 241:
case 3619:
case 3057:
case 2028:
case 1708:
case 3866:
case 2224:
case 2755:
case 987:
case 3097:
case 2997:
case 1630:
case 295:
case 1001:
case 30:
case 4046:
case 2002:
case 1645:
case 765:
case 2926:
case 4017:
case 1807:
case 1647:
case 2623:
case 2735:
case 802:
case 1114:
case 150:
case 1991:
case 2708:
case 1493:
case 3637:
case 2787:
case 2244:
case 1702:
case 1710:
case 2131:
case 1278:
case 542:
case 1445:
case 3655:
case 761:
case 3473:
case 2196:
case 879:
case 3040:
case 3362:
case 2834:
case 1735:
case 3487:
case 2391:
case 960:
case 1844:
case 380:
case 707:
case 34:
case 1775:
case 452:
case 3112:
case 3609:
case 1424:
case 3052:
case 1654:
case 1718:
case 2674:
case 3560:
case 1053:
case 3226:
case 3289:
case 1501:
case 3525:
case 666:
case 104:
case 758:
case 4053:
case 616:
case 1254:
case 418:
case 3520:
case 3435:
case 3744:
case 1785:
case 3416:
case 951:
case 3618:
case 3591:
case 2252:
case 3804:
case 3092:
case 3251:
case 1861:
case 46:
case 1911:
case 2359:
case 3697:
case 574:
case 2606:
case 712:
case 247:
case 2685:
case 993:
case 177:
case 1799:
case 3763:
case 3408:
case 3357:
case 2270:
case 2075:
case 2727:
case 111:
case 1509:
case 4010:
case 2917:
case 2594:
case 1652:
case 3384:
case 1925:
case 1308:
case 2797:
case 1242:
case 3811:
case 2289:
case 141:
case 249:
case 618:
case 3148:
case 1856:
case 767:
case 882:
case 3446:
case 1530:
case 3942:
case 3949:
case 961:
case 2581:
case 2217:
case 2302:
case 2433:
case 1600:
case 3257:
case 996:
case 253:
case 3794:
case 2622:
case 2792:
case 2306:
case 1824:
case 3911:
case 966:
case 3928:
case 3363:
case 3702:
case 1186:
case 888:
case 1023:
case 1076:
case 2429:
case 316:
case 2529:
case 2786:
case 623:
case 2079:
case 2756:
case 3427:
case 2725:
case 3508:
case 1082:
case 2773:
case 3950:
case 3967:
case 3324:
case 3380:
case 717:
case 3465:
case 856:
case 1385:
case 2206:
case 1043:
case 58:
case 2672:
case 3122:
case 87:
case 2365:
case 2777:
case 847:
case 2966:
case 1531:
case 3322:
case 3601:
case 3243:
case 133:
case 2368:
case 902:
case 1379:
case 1201:
case 875:
case 2035:
case 1915:
case 700:
case 533:
case 4072:
case 2784:
case 152:
case 463:
case 1224:
case 3131:
case 2984:
case 3710:
case 198:
case 3071:
case 3310:
case 2816:
case 3414:
case 2531:
case 2389:
case 2186:
case 1908:
case 2855:
case 1848:
case 991:
case 1566:
case 3526:
case 601:
case 869:
case 3027:
case 2250:
case 3871:
case 3245:
case 1909:
case 1291:
case 1547:
case 727:
case 1595:
case 1327:
case 408:
case 3030:
case 1746:
case 1093:
case 2379:
case 2269:
case 2199:
case 1495:
case 498:
case 2006:
case 864:
case 1683:
case 787:
case 3361:
case 1521:
case 640:
case 2916:
case 1544:
case 1140:
case 3773:
case 1454:
case 3852:
case 2522:
case 1913:
case 1917:
case 324:
case 2064:
case 27:
case 2841:
case 924:
case 3554:
case 2958:
case 2225:
case 2977:
case 3431:
case 2548:
case 1550:
case 85:
case 3457:
case 1626:
case 657:
case 833:
case 4015:
case 3086:
case 296:
case 1447:
case 1690:
case 673:
case 4080:
case 184:
case 676:
case 3667:
case 3948:
case 1470:
case 821:
case 502:
case 1929:
case 1650:
case 2386:
case 3783:
case 3382:
case 1838:
case 45:
case 3729:
case 2699:
case 2203:
case 550:
case 3968:
case 689:
case 2054:
case 1118:
case 3347:
case 3516:
case 385:
case 3491:
case 3028:
case 999:
case 466:
case 3731:
case 2861:
case 1268:
case 1874:
case 3755:
case 3256:
case 180:
case 1944:
case 2678:
case 3328:
case 1207:
case 1448:
case 2901:
case 3973:
case 556:
case 482:
case 3795:
case 3844:
case 2426:
case 2627:
case 444:
case 2025:
case 1546:
case 976:
case 2255:
case 911:
case 284:
case 1187:
case 262:
case 3514:
case 1319:
case 3819:
case 2896:
case 3026:
case 1993:
case 44:
case 3098:
case 2707:
case 566:
case 2612:
case 2476:
case 1110:
case 2416:
case 3947:
case 1384:
case 1898:
case 2078:
case 3712:
case 1192:
case 1689:
case 3687:
case 1121:
case 3806:
case 2474:
case 2283:
case 4026:
case 1295:
case 3694:
case 1190:
case 3239:
case 887:
case 954:
case 2722:
case 2326:
case 1605:
case 828:
case 3358:
case 243:
case 2053:
case 149:
case 240:
case 3625:
case 3905:
case 1618:
case 3206:
case 1335:
case 672:
case 47:
case 1465:
case 3432:
case 4028:
case 2333:
case 128:
case 1081:
case 40:
case 2964:
case 541:
case 310:
case 3078:
case 2618:
case 1756:
case 1096:
case 2423:
case 1968:
case 2030:
case 1486:
case 3066:
case 2574:
case 2633:
case 2147:
case 921:
case 734:
case 3106:
case 3409:
case 1864:
case 964:
case 1523:
case 4029:
case 4082:
case 5:
case 637:
case 3861:
case 2563:
case 1252:
case 2539:
case 167:
case 3535:
case 2938:
case 890:
case 2100:
case 2020:
case 855:
case 1015:
case 1755:
case 3781:
case 3759:
case 3604:
case 3117:
case 2254:
case 3943:
case 3469:
case 1995:
case 451:
case 4075:
case 2676:
case 716:
case 1973:
case 2801:
case 2095:
case 3767:
case 25:
case 751:
case 3377:
case 2845:
case 1367:
case 3053:
case 773:
case 1226:
case 1149:
case 3262:
case 2762:
case 3684:
case 225:
case 1310:
case 2301:
case 220:
case 2515:
case 662:
case 64:
case 407:
case 811:
case 2038:
case 1438:
case 1144:
case 2604:
case 1505:
case 916:
case 2903:
case 1086:
case 622:
case 2823:
case 183:
case 1498:
case 2646:
case 817:
case 1198:
case 1122:
case 203:
case 3349:
case 837:
case 2870:
case 1619:
case 791:
case 1435:
case 898:
case 2297:
case 1986:
case 1264:
case 1368:
case 721:
case 4086:
case 1893:
case 3089:
case 2475:
case 405:
case 244:
case 1633:
case 863:
case 1087:
case 1189:
case 560:
case 3194:
case 136:
case 2506:
case 1999:
case 2123:
case 2347:
case 2990:
case 3158:
case 2340:
case 648:
case 353:
case 2648:
case 3676:
case 3447:
case 3099:
case 447:
case 1599:
case 3984:
case 21:
case 2014:
case 2399:
case 1559:
case 1869:
case 1434:
case 1594:
case 940:
case 2596:
case 1922:
case 386:
case 2662:
case 356:
case 1640:
case 1805:
case 3932:
case 2692:
case 2431:
case 845:
case 725:
case 2345:
case 3068:
case 1952:
case 900:
case 3175:
case 1665:
case 3059:
case 1356:
case 2119:
case 2201:
case 764:
case 540:
case 2569:
case 1564:
case 302:
case 2111:
case 282:
case 698:
case 2398:
case 2760:
case 1271:
case 3335:
case 2968:
case 779:
case 3784:
case 2394:
case 3109:
case 1292:
case 2:
case 1942:
case 3782:
case 906:
case 3733:
case 2512:
case 88:
case 508:
case 3971:
case 918:
case 874:
case 3753:
case 158:
case 3671:
case 1006:
case 3032:
case 2661:
case 2215:
case 2703:
case 364:
case 3590:
case 3231:
case 1306:
case 1527:
case 3259:
case 3854:
case 6:
case 387:
case 2210:
case 1432:
case 3884:
case 2590:
case 3178:
case 1819:
case 2012:
case 1116:
case 3953:
case 3873:
case 2115:
case 3113:
case 7:
case 2709:
case 1778:
case 1274:
case 2166:
case 2781:
case 101:
case 2443:
case 3344:
case 1194:
case 2212:
case 2826:
case 2080:
case 775:
case 153:
case 325:
case 4019:
case 3164:
case 831:
case 1280:
case 520:
case 1639:
case 3791:
case 4006:
case 1561:
case 2805:
case 3913:
case 762:
case 2204:
case 2150:
case 3342:
case 3924:
case 525:
case 74:
case 1010:
case 3261:
case 974:
case 1635:
case 19:
case 3816:
case 2263:
case 3299:
case 868:
case 2619:
case 223:
case 1529:
case 2774:
case 1193:
case 588:
case 222:
case 1768:
case 2000:
case 3444:
case 3653:
case 511:
case 2341:
case 1996:
case 769:
case 853:
case 2868:
case 440:
case 3374:
case 2393:
case 1923:
case 2324:
case 621:
case 3746:
case 3006:
case 308:
case 219:
case 2599:
case 273:
case 3246:
case 626:
case 388:
case 2918:
case 4016:
case 3595:
case 956:
case 3720:
case 1888:
case 3227:
case 2018:
case 1205:
case 3306:
case 413:
case 4027:
case 2761:
case 2170:
case 36:
case 3878:
case 3572:
case 92:
case 1945:
case 794:
case 1202:
case 4022:
case 3024:
case 3901:
case 3723:
case 878:
case 28:
case 1284:
case 1543:
case 2214:
case 433:
case 2766:
case 1064:
case 2557:
case 3536:
case 3360:
case 3883:
case 2794:
case 514:
case 3385:
case 1196:
case 185:
case 634:
case 1073:
case 682:
case 3588:
case 925:
case 2511:
case 636:
case 3448:
case 2831:
case 2763:
case 2992:
case 3849:
case 1288:
case 1216:
case 1255:
case 1511:
case 852:
case 1071:
case 3161:
case 1719:
case 272:
case 174:
case 2789:
case 726:
case 1513:
case 3091:
case 1624:
case 465:
case 3585:
case 4054:
case 859:
case 2923:
case 200:
case 848:
case 1132:
case 3693:
case 946:
case 359:
case 605:
case 1177:
case 936:
case 630:
case 1871:
case 3501:
case 1954:
case 160:
case 3725:
case 990:
case 1539:
case 1179:
case 652:
case 608:
case 2780:
case 2519:
case 1362:
case 3437:
case 3471:
case 1506:
case 35:
case 2233:
case 2047:
case 1672:
case 930:
case 1790:
case 3699:
case 3621:
case 1851:
case 2087:
case 3940:
case 428:
case 3049:
case 3000:
case 3716:
case 661:
case 3685:
case 1916:
case 1440:
case 3405:
case 2818:
case 807:
case 2427:
case 3115:
case 3132:
case 1115:
case 1044:
case 2541:
case 3749:
case 2450:
case 1230:
case 3141:
case 421:
case 3229:
case 2491:
case 2016:
case 3603:
case 1638:
case 3965:
case 2385:
case 789:
case 3825:
case 3958:
case 1759:
case 2141:
case 266:
case 3286:
case 1646:
case 2721:
case 2887:
case 486:
case 1392:
case 39:
case 3021:
case 1859:
case 750:
case 1354:
case 3077:
case 792:
case 1989:
case 736:
case 3540:
case 3213:
case 414:
case 3818:
case 164:
case 1365:
case 3688:
case 1239:
case 140:
case 1524:
case 3615:
case 1828:
case 3798:
case 1170:
case 477:
case 2690:
case 3014:
case 1854:
case 1884:
case 209:
case 2274:
case 432:
case 2675:
case 1485:
case 60:
case 3537:
case 562:
case 1304:
case 3892:
case 3629:
case 3495:
case 2724:
case 2183:
case 926:
case 3544:
case 1829:
case 1800:
case 2932:
case 1563:
case 2305:
case 2228:
case 54:
case 2140:
case 2819:
case 2328:
case 4060:
case 3636:
case 3065:
case 624:
case 1711:
case 2113:
case 2021:
case 3:
case 3219:
case 1567:
case 4009:
case 2366:
case 389:
case 1221:
case 3828:
case 2942:
case 963:
case 186:
case 3788:
case 3203:
case 3167:
case 2747:
case 1317:
case 2889:
case 3602:
case 3895:
case 2750:
case 3176:
case 2649:
case 434:
case 2597:
case 2397:
case 2487:
case 1930:
case 1970:
case 2745:
case 3624:
case 2382:
case 1590:
case 2524:
case 2507:
case 2573:
case 4081:
case 3801:
case 2728:
case 3076:
case 3015:
case 2608:
case 2776:
case 2738:
case 1664:
case 1359:
case 685:
case 1568:
case 3735:
case 3291:
case 1374:
case 1786:
case 2082:
case 382:
case 3275:
case 2961:
case 901:
case 554:
case 121:
case 2576:
case 1410:
case 3623:
case 3157:
case 1622:
case 2809:
case 2339:
case 2371:
case 2601:
case 675:
case 3774:
case 2239:
case 3223:
case 341:
case 3407:
case 349:
case 1456:
case 2751:
case 1108:
case 611:
case 2468:
case 3663:
case 1593:
case 1576:
case 3396:
case 602:
case 424:
case 3796:
case 625:
case 2483:
case 628:
case 2956:
case 3512:
case 1391:
case 2624:
case 1695:
case 1055:
case 3658:
case 862:
case 522:
case 989:
case 2048:
case 212:
case 1102:
case 1850:
case 314:
case 491:
case 3439:
case 2697:
case 513:
case 2620:
case 453:
case 3538:
case 1520:
case 493:
case 2658:
case 113:
case 1994:
case 3586:
case 2647:
case 3664:
case 1535:
case 812:
case 1260:
case 3376:
case 1685:
case 3329:
case 1978:
case 3998:
case 112:
case 873:
case 3882:
case 1712:
case 1886:
case 415:
case 3754:
case 435:
case 2551:
case 2949:
case 288:
case 2871:
case 1475:
case 1552:
case 515:
case 3872:
case 2664:
case 2466:
case 361:
case 1865:
case 2634:
case 3199:
case 3858:
case 2566:
case 3033:
case 2804:
case 163:
case 754:
case 766:
case 3821:
case 2743:
case 2598:
case 1227:
case 2814:
case 232:
case 1333:
case 450:
case 137:
case 1063:
case 871:
case 1265:
case 142:
case 3233:
case 3489:
case 3576:
case 1926:
case 865:
case 2710:
case 697:
case 205:
case 2457:
case 3925:
case 2833:
case 2403:
case 33:
case 3061:
case 1549:
case 71:
case 3645:
case 1655:
case 2680:
case 3214:
case 1146:
case 3706:
case 2642:
case 1696:
case 708:
case 2258:
case 1956:
case 2456:
case 3249:
case 2521:
case 2885:
case 1200:
case 945:
case 1228:
case 2924:
case 3613:
case 317:
case 3001:
case 1117:
case 3217:
case 2632:
case 619:
case 3927:
case 1357:
case 344:
case 2803:
case 488:
case 2947:
case 2862:
case 2241:
case 228:
case 3102:
case 441:
case 1164:
case 1315:
case 3096:
case 4039:
case 500:
case 1162:
case 1150:
case 131:
case 1862:
case 2049:
case 1413:
case 2821:
case 1903:
case 867:
case 1309:
case 3147:
case 3923:
case 3280:
case 3981:
case 1130:
case 3287:
case 1452:
case 653:
case 2820:
case 546:
case 2854:
case 2640:
case 2587:
case 474:
case 2810:
case 1753:
case 892:
case 753:
case 2579:
case 3379:
case 52:
case 193:
case 2091:
case 2508:
case 2489:
case 1311:
case 2659:
case 669:
case 2559:
case 3143:
case 1176:
case 1537:
case 1099:
case 335:
case 3126:
case 1740:
case 1171:
case 3346:
case 1965:
case 1134:
case 907:
case 2616:
case 2523:
case 3665:
case 1897:
case 3843:
case 1409:
case 2880:
case 298:
case 318:
case 3302:
case 1455:
case 1749:
case 3851:
case 3594:
case 2736:
case 3463:
case 728:
case 3990:
case 858:
case 3054:
case 2808:
case 1863:
case 1070:
case 122:
case 1558:
case 747:
case 309:
case 1976:
case 105:
case 3441:
case 928:
case 3745:
case 3510:
case 2288:
case 3681:
case 2950:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1710745201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,];
var gg_b = "1710745201/";

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
