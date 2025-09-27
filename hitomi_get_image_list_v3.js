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
case 2707:
case 533:
case 3196:
case 2176:
case 231:
case 2525:
case 118:
case 807:
case 4013:
case 1769:
case 3400:
case 2109:
case 370:
case 2884:
case 1765:
case 2658:
case 1635:
case 2729:
case 3059:
case 1516:
case 2354:
case 1569:
case 1446:
case 350:
case 717:
case 1565:
case 1492:
case 2644:
case 592:
case 2340:
case 2127:
case 2348:
case 3027:
case 98:
case 1681:
case 494:
case 4067:
case 1672:
case 3290:
case 1113:
case 2826:
case 3793:
case 547:
case 3298:
case 2773:
case 202:
case 3450:
case 1138:
case 2155:
case 988:
case 3458:
case 408:
case 782:
case 2608:
case 3009:
case 2600:
case 1866:
case 2877:
case 2304:
case 3897:
case 1087:
case 1819:
case 289:
case 3234:
case 355:
case 3714:
case 3621:
case 3076:
case 2853:
case 1875:
case 1879:
case 2794:
case 2513:
case 2945:
case 1262:
case 3774:
case 3131:
case 2949:
case 2660:
case 3069:
case 2443:
case 224:
case 2668:
case 2085:
case 3688:
case 3680:
case 4025:
case 2364:
case 415:
case 2210:
case 2218:
case 2738:
case 1620:
case 1759:
case 2730:
case 1628:
case 2233:
case 3848:
case 3840:
case 1990:
case 554:
case 3883:
case 2637:
case 452:
case 1401:
case 1727:
case 979:
case 1129:
case 1125:
case 3952:
case 363:
case 1093:
case 410:
case 1576:
case 1856:
case 2567:
case 25:
case 2397:
case 3185:
case 2488:
case 528:
case 959:
case 1527:
case 3468:
case 606:
case 1386:
case 1705:
case 2169:
case 3643:
case 3460:
case 4073:
case 1709:
case 1832:
case 1823:
case 1107:
case 2767:
case 27:
case 3787:
case 237:
case 4057:
case 3412:
case 2505:
case 2401:
case 73:
case 1637:
case 3420:
case 205:
case 2125:
case 3428:
case 15:
case 3542:
case 2576:
case 2093:
case 178:
case 2527:
case 3366:
case 1488:
case 1480:
case 932:
case 2709:
case 310:
case 757:
case 1165:
case 1169:
case 3341:
case 2386:
case 17:
case 2776:
case 590:
case 2823:
case 2014:
case 456:
case 3895:
case 3271:
case 2879:
case 2555:
case 2291:
case 3899:
case 1949:
case 836:
case 2262:
case 3007:
case 1513:
case 3114:
case 1794:
case 1668:
case 124:
case 1443:
case 2806:
case 1089:
case 1364:
case 1911:
case 879:
case 1218:
case 1594:
case 2628:
case 3025:
case 315:
case 1730:
case 143:
case 595:
case 3601:
case 481:
case 1222:
case 859:
case 3970:
case 4016:
case 2612:
case 3933:
case 658:
case 3661:
case 2672:
case 4076:
case 3918:
case 1383:
case 1773:
case 65:
case 3531:
case 4009:
case 1278:
case 4005:
case 3435:
case 2138:
case 1155:
case 102:
case 1600:
case 514:
case 3886:
case 2947:
case 3245:
case 1608:
case 206:
case 1982:
case 475:
case 678:
case 1877:
case 2866:
case 2815:
case 2819:
case 3211:
case 2087:
case 3174:
case 3731:
case 67:
case 2202:
case 3067:
case 830:
case 2194:
case 1421:
case 2167:
case 21:
case 596:
case 2716:
case 3094:
case 131:
case 1525:
case 2236:
case 3187:
case 3379:
case 3306:
case 412:
case 3785:
case 624:
case 1884:
case 88:
case 1109:
case 1105:
case 2769:
case 1725:
case 3030:
case 2639:
case 1729:
case 2635:
case 1658:
case 3013:
case 1354:
case 2516:
case 2492:
case 2565:
case 771:
case 3481:
case 1803:
case 2461:
case 1127:
case 3585:
case 2586:
case 3541:
case 3083:
case 2140:
case 952:
case 3445:
case 479:
case 3566:
case 3449:
case 2327:
case 2063:
case 3515:
case 332:
case 3943:
case 157:
case 3519:
case 1893:
case 910:
case 1797:
case 972:
case 3004:
case 459:
case 3766:
case 881:
case 138:
case 2786:
case 393:
case 3741:
case 3652:
case 2305:
case 3239:
case 513:
case 1367:
case 1023:
case 2376:
case 1814:
case 177:
case 3719:
case 671:
case 1912:
case 623:
case 1394:
case 876:
case 2524:
case 180:
case 1928:
case 3869:
case 743:
case 2889:
case 2104:
case 839:
case 3281:
case 1006:
case 3272:
case 1764:
case 915:
case 2885:
case 1634:
case 1313:
case 2611:
case 2724:
case 3602:
case 2968:
case 724:
case 2359:
case 1221:
case 863:
case 2649:
case 1564:
case 2645:
case 3827:
case 1504:
case 812:
case 3921:
case 1280:
case 48:
case 994:
case 3756:
case 850:
case 2682:
case 1373:
case 2026:
case 657:
case 2900:
case 908:
case 2908:
case 2201:
case 3184:
case 3732:
case 702:
case 3805:
case 638:
case 435:
case 1066:
case 3212:
case 464:
case 1019:
case 3876:
case 3556:
case 870:
case 2053:
case 3228:
case 3723:
case 1554:
case 3153:
case 1433:
case 217:
case 3779:
case 3385:
case 855:
case 2197:
case 3706:
case 3389:
case 3064:
case 1548:
case 599:
case 2369:
case 2950:
case 1939:
case 2084:
case 4024:
case 1935:
case 2958:
case 3579:
case 2595:
case 2462:
case 1329:
case 2599:
case 3575:
case 2491:
case 3482:
case 731:
case 875:
case 2003:
case 3506:
case 144:
case 2433:
case 3894:
case 2554:
case 521:
case 271:
case 3119:
case 1799:
case 3115:
case 1795:
case 808:
case 3166:
case 912:
case 3717:
case 1365:
case 2935:
case 80:
case 4064:
case 251:
case 3838:
case 1462:
case 3830:
case 3024:
case 3813:
case 553:
case 1491:
case 2754:
case 419:
case 566:
case 2748:
case 1003:
case 2243:
case 3763:
case 3268:
case 407:
case 2357:
case 2288:
case 2783:
case 2373:
case 2124:
case 3393:
case 1671:
case 706:
case 1908:
case 335:
case 182:
case 2041:
case 2583:
case 1201:
case 3563:
case 1164:
case 1077:
case 611:
case 3610:
case 2887:
case 2972:
case 3618:
case 2981:
case 816:
case 1053:
case 38:
case 3867:
case 3678:
case 4048:
case 617:
case 2079:
case 4040:
case 3807:
case 1524:
case 810:
case 1452:
case 2928:
case 4054:
case 3784:
case 3132:
case 1292:
case 1885:
case 2764:
case 1017:
case 1104:
case 1611:
case 2313:
case 3156:
case 3829:
case 1359:
case 2330:
case 3825:
case 2338:
case 700:
case 872:
case 1645:
case 2564:
case 401:
case 1649:
case 3703:
case 1586:
case 939:
case 1327:
case 1063:
case 3577:
case 560:
case 2597:
case 359:
case 4004:
case 3434:
case 3553:
case 976:
case 493:
case 2056:
case 432:
case 1309:
case 2032:
case 1786:
case 23:
case 3526:
case 3258:
case 1937:
case 2367:
case 2023:
case 956:
case 1831:
case 3250:
case 379:
case 3175:
case 3179:
case 527:
case 2195:
case 3490:
case 3387:
case 2266:
case 1277:
case 2137:
case 2241:
case 593:
case 3849:
case 1001:
case 145:
case 2802:
case 3917:
case 1493:
case 2088:
case 990:
case 3689:
case 2080:
case 4028:
case 3060:
case 3068:
case 427:
case 2665:
case 646:
case 2431:
case 2616:
case 726:
case 532:
case 2940:
case 2535:
case 1878:
case 1558:
case 1550:
case 2539:
case 1051:
case 3416:
case 3465:
case 3592:
case 2160:
case 1203:
case 3469:
case 2168:
case 783:
case 3546:
case 2852:
case 2489:
case 3561:
case 3188:
case 465:
case 2382:
case 501:
case 995:
case 3391:
case 828:
case 1128:
case 3037:
case 1657:
case 3761:
case 82:
case 684:
case 1508:
case 3792:
case 2349:
case 3701:
case 725:
case 2232:
case 1172:
case 1181:
case 2964:
case 1638:
case 2655:
case 645:
case 2223:
case 448:
case 242:
case 2659:
case 2108:
case 2512:
case 1263:
case 1768:
case 146:
case 869:
case 4035:
case 4039:
case 3501:
case 2520:
case 914:
case 1487:
case 1390:
case 2528:
case 1694:
case 3121:
case 3476:
case 2496:
case 2021:
case 2676:
case 3642:
case 720:
case 847:
case 473:
case 996:
case 421:
case 1822:
case 3352:
case 3000:
case 362:
case 2158:
case 1135:
case 3455:
case 1139:
case 2150:
case 466:
case 519:
case 2891:
case 3336:
case 2275:
case 3551:
case 3871:
case 1092:
case 2144:
case 1217:
case 767:
case 1046:
case 297:
case 1737:
case 9:
case 453:
case 184:
case 3953:
case 2627:
case 79:
case 3494:
case 2667:
case 1676:
case 499:
case 2474:
case 353:
case 3254:
case 2818:
case 2810:
case 3687:
case 268:
case 933:
case 3248:
case 3941:
case 2139:
case 2986:
case 3438:
case 1158:
case 3430:
case 4000:
case 321:
case 1891:
case 1275:
case 4008:
case 1206:
case 197:
case 3915:
case 1144:
case 2092:
case 3919:
case 969:
case 2737:
case 530:
case 2061:
case 1232:
case 3580:
case 3161:
case 1349:
case 3588:
case 3204:
case 2172:
case 3146:
case 1712:
case 1311:
case 2613:
case 58:
case 3039:
case 1659:
case 1720:
case 1655:
case 1223:
case 564:
case 2768:
case 2263:
case 1512:
case 1108:
case 2760:
case 8:
case 3283:
case 4050:
case 3780:
case 2924:
case 348:
case 3788:
case 2390:
case 3378:
case 1520:
case 3370:
case 2398:
case 3674:
case 34:
case 1442:
case 1983:
case 3310:
case 3318:
case 974:
case 2051:
case 3333:
case 1572:
case 2700:
case 1852:
case 1043:
case 1581:
case 3322:
case 1160:
case 2708:
case 1485:
case 2673:
case 1904:
case 1836:
case 3693:
case 3521:
case 1371:
case 3429:
case 3932:
case 103:
case 2128:
case 3425:
case 954:
case 890:
case 2284:
case 941:
case 2657:
case 1772:
case 2500:
case 2508:
case 2112:
case 3264:
case 2744:
case 2995:
case 191:
case 3012:
case 2999:
case 1266:
case 536:
case 2001:
case 3457:
case 2625:
case 1802:
case 1739:
case 1735:
case 2493:
case 1215:
case 229:
case 413:
case 1954:
case 1080:
case 92:
case 360:
case 1669:
case 3151:
case 928:
case 1948:
case 1616:
case 1431:
case 3898:
case 1539:
case 2226:
case 2558:
case 1535:
case 3653:
case 3229:
case 797:
case 1010:
case 369:
case 496:
case 3677:
case 973:
case 1686:
case 1022:
case 392:
case 2909:
case 2062:
case 333:
case 3207:
case 3082:
case 966:
case 2091:
case 3626:
case 1892:
case 1967:
case 104:
case 3942:
case 4:
case 19:
case 1861:
case 3996:
case 3603:
case 1994:
case 1312:
case 555:
case 587:
case 3850:
case 1231:
case 1320:
case 3162:
case 3578:
case 2214:
case 1328:
case 3684:
case 2959:
case 742:
case 2360:
case 2955:
case 2477:
case 3388:
case 1466:
case 1549:
case 1545:
case 1913:
case 3770:
case 1419:
case 2798:
case 249:
case 3273:
case 2790:
case 3778:
case 2293:
case 575:
case 225:
case 1511:
case 934:
case 1198:
case 341:
case 3710:
case 1190:
case 3230:
case 1571:
case 1851:
case 3321:
case 3733:
case 1957:
case 2052:
case 703:
case 3722:
case 2417:
case 698:
case 1782:
case 3533:
case 2111:
case 2274:
case 283:
case 3510:
case 2747:
case 3931:
case 374:
case 813:
case 604:
case 2145:
case 3663:
case 2683:
case 3522:
case 1372:
case 328:
case 3483:
case 2344:
case 1801:
case 3049:
case 4090:
case 2648:
case 3045:
case 1907:
case 1242:
case 1335:
case 3267:
case 32:
case 2350:
case 1339:
case 2969:
case 3989:
case 3136:
case 3985:
case 3011:
case 1456:
case 2880:
case 3617:
case 490:
case 556:
case 3152:
case 3868:
case 4034:
case 1432:
case 1929:
case 1423:
case 563:
case 122:
case 1695:
case 261:
case 791:
case 126:
case 2907:
case 3205:
case 1916:
case 3209:
case 510:
case 865:
case 1350:
case 2296:
case 3828:
case 1002:
case 2335:
case 1358:
case 2242:
case 1965:
case 2456:
case 729:
case 2929:
case 745:
case 2432:
case 3227:
case 428:
case 625:
case 161:
case 3675:
case 3090:
case 2699:
case 2070:
case 3679:
case 2190:
case 3178:
case 3495:
case 474:
case 3170:
case 2198:
case 2475:
case 667:
case 3255:
case 2957:
case 2582:
case 860:
case 2851:
case 515:
case 2571:
case 3259:
case 395:
case 1052:
case 1843:
case 2406:
case 3993:
case 1417:
case 2973:
case 1111:
case 3791:
case 2771:
case 1747:
case 1274:
case 1145:
case 3914:
case 620:
case 441:
case 3361:
case 1149:
case 2372:
case 3346:
case 2381:
case 3392:
case 827:
case 2994:
case 626:
case 873:
case 3974:
case 508:
case 2312:
case 2624:
case 2711:
case 1426:
case 1182:
case 1734:
case 3835:
case 1590:
case 2320:
case 1598:
case 594:
case 3839:
case 3702:
case 3122:
case 3486:
case 1955:
case 1368:
case 1959:
case 2930:
case 2913:
case 2545:
case 1664:
case 2466:
case 853:
case 1293:
case 3110:
case 149:
case 1798:
case 1453:
case 2511:
case 125:
case 3133:
case 1534:
case 3536:
case 3619:
case 2018:
case 1484:
case 3752:
case 4071:
case 3641:
case 3047:
case 1905:
case 3216:
case 1909:
case 492:
case 768:
case 3736:
case 2892:
case 1403:
case 469:
case 76:
case 3265:
case 1976:
case 120:
case 639:
case 2211:
case 3819:
case 2323:
case 2067:
case 764:
case 1076:
case 294:
case 20:
case 1714:
case 3194:
case 1621:
case 1593:
case 1009:
case 676:
case 2332:
case 1962:
case 1005:
case 982:
case 1897:
case 208:
case 2531:
case 3113:
case 1793:
case 3130:
case 2922:
case 3138:
case 844:
case 2933:
case 909:
case 78:
case 489:
case 2661:
case 2910:
case 2692:
case 150:
case 3492:
case 3569:
case 2472:
case 3446:
case 431:
case 2589:
case 3461:
case 2585:
case 2030:
case 1055:
case 3635:
case 3516:
case 2824:
case 2013:
case 1864:
case 1317:
case 2785:
case 504:
case 59:
case 3769:
case 3074:
case 2094:
case 886:
case 1196:
case 2375:
case 3399:
case 2742:
case 2651:
case 880:
case 3014:
case 3823:
case 687:
case 2319:
case 458:
case 139:
case 252:
case 1787:
case 1377:
case 2366:
case 1936:
case 1189:
case 1804:
case 1643:
case 45:
case 3832:
case 210:
case 3386:
case 2341:
case 176:
case 3125:
case 675:
case 2420:
case 2428:
case 3856:
case 2073:
case 1326:
case 47:
case 3509:
case 1883:
case 779:
case 2057:
case 3401:
case 1437:
case 857:
case 3157:
case 1848:
case 650:
case 2978:
case 3990:
case 1854:
case 3324:
case 2193:
case 4089:
case 1065:
case 670:
case 1384:
case 1069:
case 1680:
case 3934:
case 877:
case 3879:
case 2271:
case 2282:
case 838:
case 3291:
case 3875:
case 1131:
case 3451:
case 2114:
case 2848:
case 2303:
case 3222:
case 1601:
case 1978:
case 3713:
case 3210:
case 980:
case 3594:
case 400:
case 2574:
case 115:
case 2384:
case 3443:
case 2069:
case 324:
case 2688:
case 3364:
case 3817:
case 1282:
case 3945:
case 2016:
case 3116:
case 2353:
case 1796:
case 3767:
case 152:
case 2787:
case 239:
case 957:
case 3480:
case 405:
case 1366:
case 608:
case 3488:
case 276:
case 1341:
case 4093:
case 3165:
case 2460:
case 732:
case 2643:
case 2587:
case 263:
case 2952:
case 938:
case 1596:
case 1542:
case 4014:
case 1412:
case 3863:
case 923:
case 1472:
case 1481:
case 4074:
case 250:
case 882:
case 1585:
case 971:
case 3127:
case 3803:
case 1589:
case 212:
case 3729:
case 1038:
case 2055:
case 418:
case 3725:
case 3650:
case 1824:
case 3354:
case 2317:
case 809:
case 951:
case 1789:
case 3105:
case 116:
case 2408:
case 3109:
case 1094:
case 3421:
case 1187:
case 3529:
case 1379:
case 331:
case 1375:
case 652:
case 1211:
case 2234:
case 2593:
case 2714:
case 3853:
case 1174:
case 10:
case 3573:
case 2076:
case 3042:
case 194:
case 1731:
case 1067:
case 1245:
case 1332:
case 3600:
case 2009:
case 2897:
case 3971:
case 2793:
case 3826:
case 1356:
case 2514:
case 3278:
case 986:
case 3773:
case 1531:
case 2450:
case 1439:
case 302:
case 275:
case 3159:
case 1435:
case 4087:
case 1661:
case 2027:
case 2444:
case 1910:
case 1646:
case 1918:
case 540:
case 3564:
case 1163:
case 1048:
case 2703:
case 2200:
case 924:
case 3634:
case 1054:
case 3313:
case 3221:
case 1602:
case 4017:
case 1869:
case 3920:
case 380:
case 2784:
case 1865:
case 3764:
case 0:
case 2503:
case 1281:
case 943:
case 3006:
case 3075:
case 2678:
case 2099:
case 3912:
case 101:
case 619:
case 3079:
case 3698:
case 2374:
case 2123:
case 3367:
case 3023:
case 1342:
case 1235:
case 3814:
case 1396:
case 2753:
case 2498:
case 3470:
case 1719:
case 2175:
case 3199:
case 1715:
case 377:
case 3797:
case 1004:
case 193:
case 236:
case 1652:
case 1519:
case 978:
case 132:
case 1943:
case 710:
case 357:
case 1411:
case 2873:
case 2553:
case 1566:
case 2577:
case 1449:
case 937:
case 1445:
case 344:
case 931:
case 3243:
case 2517:
case 417:
case 1855:
case 2838:
case 1575:
case 3325:
case 351:
case 2830:
case 1859:
case 3329:
case 1471:
case 1126:
case 2813:
case 3754:
case 1064:
case 1389:
case 1177:
case 3548:
case 2166:
case 2717:
case 3935:
case 3422:
case 3939:
case 2141:
case 3186:
case 806:
case 3554:
case 1153:
case 601:
case 1775:
case 2119:
case 3410:
case 3019:
case 3887:
case 2610:
case 2992:
case 107:
case 3972:
case 2314:
case 1876:
case 1556:
case 2867:
case 2622:
case 1805:
case 386:
case 2086:
case 1732:
case 81:
case 1809:
case 3583:
case 482:
case 3704:
case 288:
case 3124:
case 1691:
case 2393:
case 708:
case 3647:
case 235:
case 632:
case 409:
case 2763:
case 3357:
case 1103:
case 1827:
case 3280:
case 1532:
case 207:
case 1618:
case 309:
case 2220:
case 2723:
case 2331:
case 3896:
case 2809:
case 1622:
case 188:
case 831:
case 2097:
case 3164:
case 2212:
case 906:
case 2756:
case 4041:
case 2523:
case 2691:
case 3900:
case 135:
case 659:
case 4015:
case 1268:
case 4019:
case 1260:
case 91:
case 3003:
case 1517:
case 471:
case 770:
case 3595:
case 3251:
case 1830:
case 2579:
case 2859:
case 1838:
case 918:
case 3491:
case 2482:
case 1813:
case 2126:
case 2706:
case 3197:
case 1166:
case 451:
case 3369:
case 712:
case 3958:
case 2153:
case 1894:
case 750:
case 444:
case 1753:
case 2396:
case 3831:
case 2239:
case 1250:
case 3937:
case 1490:
case 1387:
case 179:
case 1175:
case 756:
case 2719:
case 311:
case 1498:
case 2117:
case 2004:
case 688:
case 485:
case 905:
case 591:
case 3305:
case 4056:
case 2515:
case 159:
case 635:
case 3402:
case 2519:
case 4032:
case 2636:
case 1434:
case 739:
case 2541:
case 664:
case 2445:
case 3327:
case 2449:
case 2566:
case 1200:
case 3649:
case 4075:
case 1208:
case 3645:
case 2163:
case 3183:
case 1584:
case 2980:
case 2054:
case 900:
case 3436:
case 2988:
case 1825:
case 858:
case 3960:
case 2865:
case 1784:
case 87:
case 630:
case 3261:
case 2272:
case 3104:
case 3889:
case 3292:
case 3885:
case 837:
case 878:
case 1670:
case 201:
case 1099:
case 1678:
case 503:
case 1123:
case 3524:
case 1807:
case 1374:
case 2923:
case 1037:
case 1761:
case 234:
case 1746:
case 3500:
case 2264:
case 3112:
case 699:
case 1391:
case 4043:
case 2932:
case 795:
case 2429:
case 3347:
case 265:
case 3120:
case 2425:
case 3700:
case 1465:
case 1592:
case 1561:
case 1188:
case 983:
case 2310:
case 1224:
case 1631:
case 2614:
case 1963:
case 585:
case 557:
case 491:
case 3607:
case 2898:
case 3878:
case 3226:
case 1685:
case 1068:
case 1143:
case 3544:
case 1060:
case 2028:
case 3625:
case 3253:
case 3758:
case 345:
case 2020:
case 4088:
case 2834:
case 1917:
case 577:
case 2906:
case 227:
case 3995:
case 3744:
case 2975:
case 3999:
case 2457:
case 1286:
case 961:
case 1845:
case 2081:
case 2543:
case 3217:
case 2915:
case 2072:
case 199:
case 3092:
case 1953:
case 3061:
case 967:
case 2438:
case 1455:
case 523:
case 3139:
case 2941:
case 1459:
case 2430:
case 3135:
case 1295:
case 1551:
case 2413:
case 1882:
case 1977:
case 221:
case 1926:
case 2743:
case 544:
case 1008:
case 1642:
case 3833:
case 1696:
case 3818:
case 2254:
case 253:
case 920:
case 3810:
case 3487:
case 2378:
case 3390:
case 3398:
case 2370:
case 2674:
case 1903:
case 714:
case 3694:
case 1121:
case 24:
case 3768:
case 1405:
case 1409:
case 1501:
case 442:
case 2283:
case 248:
case 3924:
case 3334:
case 3613:
case 3630:
case 1984:
case 804:
case 1058:
case 3638:
case 1302:
case 2580:
case 1701:
case 2588:
case 2146:
case 3568:
case 3181:
case 2204:
case 3560:
case 2192:
case 1370:
case 3528:
case 14:
case 582:
case 1467:
case 2903:
case 3496:
case 1674:
case 2409:
case 2405:
case 3100:
case 148:
case 1283:
case 2501:
case 1780:
case 509:
case 3964:
case 3720:
case 3223:
case 2302:
case 3655:
case 820:
case 1039:
case 2050:
case 342:
case 1161:
case 3349:
case 2427:
case 3345:
case 747:
case 3712:
case 1192:
case 1204:
case 2044:
case 1146:
case 769:
case 397:
case 1072:
case 1915:
case 634:
case 3627:
case 2953:
case 1847:
case 792:
case 3150:
case 1941:
case 665:
case 1438:
case 121:
case 2336:
case 3275:
case 3891:
case 2977:
case 2299:
case 2871:
case 3997:
case 3279:
case 2926:
case 849:
case 2008:
case 2352:
case 3605:
case 998:
case 3609:
case 2000:
case 4092:
case 2751:
case 1494:
case 2642:
case 3676:
case 4061:
case 904:
case 1687:
case 153:
case 484:
case 3616:
case 64:
case 3940:
case 1151:
case 1898:
case 4001:
case 3539:
case 648:
case 445:
case 3088:
case 3080:
case 2689:
case 3669:
case 3665:
case 160:
case 2068:
case 1020:
case 3735:
case 213:
case 3739:
case 1473:
case 2811:
case 2917:
case 1012:
case 1975:
case 922:
case 1979:
case 3241:
case 883:
case 1457:
case 134:
case 1101:
case 2792:
case 1264:
case 4051:
case 2746:
case 3772:
case 741:
case 1693:
case 1521:
case 2391:
case 826:
case 1932:
case 673:
case 3160:
case 2465:
case 666:
case 3852:
case 3572:
case 2469:
case 3043:
case 1322:
case 2188:
case 861:
case 1956:
case 3485:
case 2224:
case 1318:
case 1333:
case 2963:
case 1614:
case 1407:
case 2631:
case 774:
case 2416:
case 1778:
case 3415:
case 2110:
case 2502:
case 3419:
case 2118:
case 1273:
case 2133:
case 2486:
case 1257:
case 2122:
case 3441:
case 86:
case 3930:
case 3913:
case 3549:
case 3711:
case 3624:
case 2835:
case 1578:
case 1570:
case 2702:
case 2839:
case 1850:
case 884:
case 3745:
case 2301:
case 1603:
case 449:
case 2974:
case 3749:
case 214:
case 1844:
case 3312:
case 2987:
case 3285:
case 3289:
case 2881:
case 2552:
case 3846:
case 3967:
case 467:
case 1942:
case 2265:
case 39:
case 674:
case 2216:
case 296:
case 766:
case 2047:
case 51:
case 1071:
case 2736:
case 398:
case 1082:
case 2424:
case 1677:
case 1464:
case 1343:
case 1808:
case 4091:
case 1800:
case 1229:
case 997:
case 846:
case 1653:
case 3010:
case 2619:
case 641:
case 2615:
case 3018:
case 420:
case 322:
case 840:
case 991:
case 3699:
case 2675:
case 2679:
case 3070:
case 3695:
case 1404:
case 1617:
case 4002:
case 2606:
case 1860:
case 3929:
case 1152:
case 1868:
case 3925:
case 2227:
case 2276:
case 3335:
case 3242:
case 1267:
case 760:
case 1985:
case 1989:
case 2812:
case 2205:
case 3907:
case 1049:
case 3801:
case 2361:
case 174:
case 500:
case 829:
case 1522:
case 2346:
case 3372:
case 1454:
case 2656:
case 3771:
case 4052:
case 3134:
case 3782:
case 1294:
case 1510:
case 4036:
case 2632:
case 2993:
case 3406:
case 483:
case 669:
case 2495:
case 1710:
case 2178:
case 3190:
case 3957:
case 2623:
case 2255:
case 1238:
case 3582:
case 524:
case 274:
case 1361:
case 2663:
case 2440:
case 3145:
case 1914:
case 3683:
case 3036:
case 1656:
case 2454:
case 2102:
case 3274:
case 2518:
case 3747:
case 3308:
case 3300:
case 2722:
case 3604:
case 1993:
case 1170:
case 2718:
case 2213:
case 1178:
case 2710:
case 1495:
case 2230:
case 543:
case 1591:
case 1255:
case 1098:
case 3888:
case 929:
case 558:
case 713:
case 2152:
case 1828:
case 22:
case 3002:
case 3358:
case 1820:
case 3350:
case 3287:
case 2985:
case 228:
case 1812:
case 2483:
case 422:
case 3640:
case 2049:
case 3463:
case 803:
case 4078:
case 2045:
case 3648:
case 1205:
case 3916:
case 1872:
case 96:
case 3976:
case 3337:
case 3905:
case 968:
case 1047:
case 233:
case 2207:
case 196:
case 3062:
case 1424:
case 1736:
case 4022:
case 2626:
case 3697:
case 2677:
case 1752:
case 2800:
case 695:
case 498:
case 2808:
case 3484:
case 2343:
case 762:
case 3821:
case 2229:
case 1351:
case 367:
case 404:
case 1:
case 49:
case 269:
case 799:
case 349:
case 3798:
case 2770:
case 1502:
case 247:
case 3790:
case 1133:
case 3959:
case 1122:
case 1486:
case 2257:
case 2497:
case 3426:
case 3171:
case 897:
case 3734:
case 3182:
case 589:
case 3598:
case 2570:
case 1702:
case 2578:
case 3214:
case 2162:
case 114:
case 1974:
case 2844:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759006802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,];
var gg_b = "1759006802/";

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
