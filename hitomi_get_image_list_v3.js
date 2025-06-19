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
case 2578:
case 592:
case 534:
case 2813:
case 1296:
case 1925:
case 3597:
case 1262:
case 535:
case 1465:
case 3406:
case 354:
case 2489:
case 1451:
case 604:
case 430:
case 1359:
case 2190:
case 1642:
case 3643:
case 1361:
case 605:
case 1469:
case 1823:
case 355:
case 176:
case 1015:
case 479:
case 2198:
case 3598:
case 818:
case 733:
case 2624:
case 41:
case 937:
case 251:
case 875:
case 3177:
case 1164:
case 2336:
case 3959:
case 3622:
case 152:
case 3742:
case 2937:
case 3563:
case 2163:
case 2570:
case 3853:
case 1842:
case 3421:
case 3036:
case 3752:
case 1743:
case 1623:
case 1711:
case 2997:
case 3444:
case 3062:
case 1536:
case 2249:
case 1377:
case 2083:
case 3364:
case 568:
case 2800:
case 1281:
case 302:
case 2259:
case 2119:
case 4067:
case 512:
case 3519:
case 2807:
case 2651:
case 739:
case 3383:
case 2064:
case 1689:
case 4060:
case 2245:
case 2442:
case 3538:
case 2721:
case 2990:
case 2452:
case 2255:
case 2396:
case 294:
case 1382:
case 1084:
case 3238:
case 3785:
case 3530:
case 1964:
case 1885:
case 4068:
case 2545:
case 770:
case 1424:
case 3412:
case 2600:
case 898:
case 2998:
case 3161:
case 1097:
case 2549:
case 4005:
case 1889:
case 3376:
case 3982:
case 2137:
case 2559:
case 2414:
case 841:
case 2423:
case 1111:
case 1645:
case 1725:
case 3825:
case 1500:
case 1269:
case 1208:
case 1241:
case 2477:
case 1655:
case 2719:
case 783:
case 3923:
case 681:
case 3914:
case 1507:
case 3343:
case 1352:
case 1661:
case 413:
case 2482:
case 1462:
case 1659:
case 1342:
case 1044:
case 2681:
case 3745:
case 206:
case 2478:
case 616:
case 2636:
case 584:
case 1855:
case 3221:
case 967:
case 3755:
case 832:
case 763:
case 1551:
case 661:
case 1849:
case 1861:
case 1323:
case 3629:
case 1314:
case 345:
case 1859:
case 1200:
case 480:
case 1569:
case 1541:
case 3759:
case 457:
case 2242:
case 538:
case 3430:
case 1524:
case 1513:
case 2112:
case 3512:
case 161:
case 3664:
case 2252:
case 2797:
case 1677:
case 2461:
case 358:
case 3065:
case 2696:
case 1122:
case 274:
case 1006:
case 90:
case 1670:
case 2790:
case 2921:
case 3254:
case 3437:
case 2351:
case 2662:
case 2514:
case 3123:
case 2459:
case 3114:
case 2798:
case 2906:
case 1678:
case 3544:
case 2144:
case 814:
case 2784:
case 878:
case 2300:
case 1021:
case 3311:
case 790:
case 821:
case 2223:
case 3777:
case 3864:
case 181:
case 1877:
case 371:
case 3985:
case 3007:
case 2896:
case 1224:
case 950:
case 3142:
case 3000:
case 427:
case 2552:
case 789:
case 2862:
case 2307:
case 1143:
case 2011:
case 3212:
case 577:
case 3092:
case 2291:
case 3394:
case 2427:
case 500:
case 3533:
case 250:
case 3875:
case 2695:
case 3066:
case 2603:
case 52:
case 1972:
case 1980:
case 4090:
case 19:
case 1386:
case 736:
case 2088:
case 404:
case 2456:
case 2171:
case 2094:
case 1068:
case 1779:
case 2420:
case 2446:
case 1417:
case 2699:
case 2960:
case 1134:
case 61:
case 2072:
case 3271:
case 1994:
case 974:
case 1988:
case 55:
case 679:
case 1331:
case 2895:
case 1439:
case 1060:
case 3387:
case 4063:
case 220:
case 3074:
case 1418:
case 543:
case 3679:
case 2905:
case 2087:
case 1435:
case 431:
case 1232:
case 1627:
case 2610:
case 549:
case 2531:
case 3847:
case 3658:
case 3293:
case 2167:
case 771:
case 3728:
case 2839:
case 2286:
case 1828:
case 1934:
case 3209:
case 3268:
case 2573:
case 2160:
case 906:
case 1499:
case 2617:
case 1646:
case 389:
case 4015:
case 267:
case 179:
case 1180:
case 1726:
case 2810:
case 1827:
case 2034:
case 476:
case 2168:
case 2109:
case 3858:
case 647:
case 4030:
case 3647:
case 3260:
case 1758:
case 3509:
case 1748:
case 998:
case 3657:
case 1194:
case 1071:
case 1628:
case 2639:
case 2193:
case 3650:
case 1566:
case 2231:
case 3334:
case 422:
case 2586:
case 2817:
case 3991:
case 3186:
case 287:
case 4037:
case 3626:
case 2256:
case 1831:
case 724:
case 1975:
case 54:
case 3887:
case 2303:
case 333:
case 1147:
case 3688:
case 2767:
case 2874:
case 725:
case 711:
case 127:
case 2246:
case 2399:
case 1150:
case 613:
case 1873:
case 3003:
case 2491:
case 1518:
case 660:
case 3880:
case 17:
case 4021:
case 1126:
case 1772:
case 38:
case 1535:
case 2527:
case 1218:
case 1631:
case 3687:
case 416:
case 1158:
case 932:
case 1235:
case 4006:
case 1148:
case 3894:
case 1432:
case 1101:
case 867:
case 994:
case 1794:
case 3888:
case 2902:
case 3379:
case 3156:
case 3471:
case 1239:
case 1886:
case 2228:
case 1517:
case 3904:
case 3120:
case 157:
case 3146:
case 3672:
case 3680:
case 755:
case 36:
case 786:
case 3348:
case 3301:
case 2204:
case 820:
case 180:
case 3409:
case 1957:
case 3017:
case 2310:
case 4012:
case 3358:
case 748:
case 1320:
case 1346:
case 3202:
case 1691:
case 1466:
case 2771:
case 1179:
case 1492:
case 3834:
case 3010:
case 1950:
case 1734:
case 3035:
case 2431:
case 3502:
case 2040:
case 2026:
case 914:
case 2339:
case 160:
case 4044:
case 619:
case 1901:
case 1958:
case 1474:
case 915:
case 2632:
case 3467:
case 921:
case 113:
case 3039:
case 627:
case 2335:
case 3920:
case 2057:
case 3791:
case 3946:
case 3956:
case 2047:
case 1016:
case 3634:
case 2318:
case 2443:
case 2821:
case 929:
case 3084:
case 3370:
case 3098:
case 3382:
case 3689:
case 2707:
case 2077:
case 1230:
case 2529:
case 483:
case 625:
case 551:
case 2082:
case 2070:
case 2398:
case 1519:
case 4074:
case 1454:
case 1978:
case 1444:
case 3711:
case 760:
case 1364:
case 1062:
case 3125:
case 3377:
case 1970:
case 234:
case 4092:
case 2621:
case 1537:
case 292:
case 1376:
case 2078:
case 1159:
case 246:
case 2390:
case 410:
case 2181:
case 3236:
case 148:
case 3889:
case 2225:
case 1161:
case 9:
case 578:
case 1412:
case 1215:
case 959:
case 1155:
case 304:
case 654:
case 521:
case 1977:
case 686:
case 305:
case 2229:
case 3964:
case 2397:
case 780:
case 515:
case 953:
case 3929:
case 1643:
case 3349:
case 376:
case 3814:
case 2045:
case 3469:
case 691:
case 3823:
case 3451:
case 1822:
case 3722:
case 3176:
case 1590:
case 2330:
case 2812:
case 3345:
case 4032:
case 2283:
case 2654:
case 2061:
case 793:
case 2059:
case 2644:
case 1081:
case 3296:
case 2724:
case 872:
case 1297:
case 1752:
case 1843:
case 3852:
case 77:
case 0:
case 1329:
case 2196:
case 1959:
case 3596:
case 602:
case 3842:
case 1170:
case 3753:
case 1742:
case 595:
case 2612:
case 125:
case 2854:
case 727:
case 856:
case 2564:
case 1325:
case 1177:
case 1598:
case 1290:
case 3015:
case 884:
case 2319:
case 2276:
case 594:
case 506:
case 285:
case 316:
case 2085:
case 256:
case 1876:
case 2522:
case 3776:
case 158:
case 284:
case 3122:
case 3670:
case 1244:
case 2890:
case 1512:
case 2243:
case 3911:
case 3677:
case 949:
case 2897:
case 361:
case 2089:
case 2698:
case 645:
case 868:
case 1069:
case 1041:
case 2113:
case 2124:
case 812:
case 3524:
case 46:
case 3513:
case 3143:
case 2543:
case 1989:
case 1212:
case 1415:
case 2951:
case 2908:
case 2941:
case 3213:
case 2321:
case 3882:
case 541:
case 2553:
case 3870:
case 1782:
case 3153:
case 1770:
case 226:
case 1311:
case 3764:
case 171:
case 1554:
case 1007:
case 1864:
case 381:
case 888:
case 1544:
case 128:
case 3436:
case 2425:
case 3021:
case 48:
case 628:
case 2483:
case 1206:
case 3462:
case 2815:
case 92:
case 3044:
case 3922:
case 1353:
case 2107:
case 3352:
case 396:
case 342:
case 3729:
case 3500:
case 439:
case 892:
case 977:
case 773:
case 582:
case 3655:
case 2511:
case 1498:
case 3251:
case 1825:
case 3725:
case 747:
case 1024:
case 2837:
case 3200:
case 2615:
case 2169:
case 2141:
case 3849:
case 144:
case 1749:
case 1761:
case 79:
case 3323:
case 3314:
case 1490:
case 3012:
case 3943:
case 1497:
case 1755:
case 3855:
case 1221:
case 801:
case 2014:
case 1185:
case 1625:
case 4010:
case 575:
case 3499:
case 50:
case 3620:
case 3172:
case 3726:
case 2294:
case 31:
case 1826:
case 2288:
case 424:
case 2572:
case 1840:
case 3934:
case 1268:
case 683:
case 3656:
case 2718:
case 3574:
case 1601:
case 520:
case 2174:
case 63:
case 817:
case 2091:
case 1567:
case 3757:
case 190:
case 781:
case 1728:
case 3266:
case 4036:
case 3627:
case 2932:
case 1293:
case 1847:
case 2816:
case 1991:
case 1746:
case 3033:
case 1720:
case 610:
case 3820:
case 1267:
case 1640:
case 716:
case 550:
case 8:
case 2287:
case 663:
case 3566:
case 1756:
case 1801:
case 1657:
case 3194:
case 454:
case 2588:
case 22:
case 761:
case 2333:
case 330:
case 2710:
case 486:
case 1260:
case 3758:
case 1568:
case 2616:
case 3779:
case 3417:
case 347:
case 3068:
case 2305:
case 926:
case 39:
case 3386:
case 3972:
case 3775:
case 2448:
case 2132:
case 2401:
case 965:
case 1875:
case 3093:
case 2309:
case 163:
case 708:
case 1394:
case 1092:
case 2974:
case 897:
case 2086:
case 669:
case 249:
case 2966:
case 3373:
case 4062:
case 2426:
case 2031:
case 3232:
case 2992:
case 1233:
case 402:
case 1380:
case 1191:
case 3804:
case 1986:
case 823:
case 3331:
case 1387:
case 2703:
case 3439:
case 2802:
case 2367:
case 567:
case 1271:
case 3988:
case 984:
case 3994:
case 689:
case 2918:
case 3179:
case 3950:
case 3734:
case 2027:
case 3356:
case 3295:
case 2935:
case 3940:
case 3691:
case 399:
case 1202:
case 2871:
case 3327:
case 849:
case 2732:
case 2488:
case 3299:
case 704:
case 705:
case 4024:
case 3957:
case 2020:
case 1017:
case 2833:
case 633:
case 3599:
case 1350:
case 1634:
case 24:
case 1460:
case 2028:
case 1326:
case 2917:
case 2671:
case 1920:
case 1791:
case 1946:
case 2195:
case 3958:
case 3474:
case 1018:
case 2103:
case 2279:
case 1347:
case 3503:
case 2910:
case 253:
case 1502:
case 68:
case 1035:
case 3948:
case 2487:
case 988:
case 3328:
case 731:
case 82:
case 259:
case 3780:
case 3772:
case 3304:
case 3535:
case 18:
case 2248:
case 2135:
case 37:
case 2540:
case 1872:
case 2526:
case 2860:
case 1773:
case 471:
case 2118:
case 4007:
case 1095:
case 800:
case 2557:
case 2774:
case 2867:
case 877:
case 2302:
case 992:
case 3539:
case 1128:
case 934:
case 2139:
case 3831:
case 2:
case 1731:
case 2668:
case 3787:
case 3147:
case 2547:
case 1887:
case 2117:
case 670:
case 4069:
case 4008:
case 3517:
case 607:
case 2434:
case 843:
case 1672:
case 2257:
case 2247:
case 2893:
case 1471:
case 1156:
case 458:
case 2667:
case 3235:
case 1894:
case 3101:
case 3788:
case 229:
case 3631:
case 722:
case 3218:
case 1433:
case 2995:
case 3158:
case 2250:
case 2558:
case 901:
case 2412:
case 98:
case 3600:
case 1765:
case 3076:
case 2145:
case 2238:
case 291:
case 3130:
case 2611:
case 2977:
case 3963:
case 192:
case 2970:
case 2982:
case 3137:
case 146:
case 1078:
case 2159:
case 1390:
case 3808:
case 1225:
case 3851:
case 1422:
case 3607:
case 2161:
case 933:
case 3561:
case 1751:
case 737:
case 135:
case 1962:
case 96:
case 1398:
case 3259:
case 1384:
case 3119:
case 845:
case 1606:
case 2454:
case 552:
case 449:
case 844:
case 2444:
case 2062:
case 709:
case 3249:
case 1525:
case 2364:
case 1136:
case 1821:
case 1443:
case 3255:
case 3115:
case 3608:
case 3669:
case 2515:
case 3641:
case 332:
case 1077:
case 3651:
case 3807:
case 1707:
case 395:
case 2538:
case 1529:
case 1612:
case 351:
case 1564:
case 2177:
case 2945:
case 1854:
case 601:
case 858:
case 1411:
case 3198:
case 2955:
case 1844:
case 3184:
case 2290:
case 3744:
case 3613:
case 3624:
case 224:
case 2421:
case 2297:
case 2036:
case 1338:
case 266:
case 531:
case 2949:
case 2959:
case 168:
case 970:
case 907:
case 4091:
case 1981:
case 2742:
case 1315:
case 2182:
case 3582:
case 112:
case 1936:
case 635:
case 3197:
case 3578:
case 3485:
case 2081:
case 3282:
case 3270:
case 646:
case 740:
case 692:
case 1713:
case 3277:
case 321:
case 1264:
case 286:
case 1045:
case 871:
case 255:
case 188:
case 254:
case 2822:
case 378:
case 314:
case 3915:
case 2298:
case 3381:
case 2284:
case 828:
case 3190:
case 2311:
case 3214:
case 2777:
case 2864:
case 3154:
case 2985:
case 1884:
case 854:
case 2544:
case 3144:
case 3300:
case 459:
case 3552:
case 1762:
case 2883:
case 3307:
case 963:
case 3011:
case 2212:
case 2415:
case 2989:
case 165:
case 1796:
case 2676:
case 2438:
case 2782:
case 172:
case 1553:
case 3542:
case 3112:
case 2512:
case 1897:
case 1089:
case 866:
case 2664:
case 3252:
case 3445:
case 2008:
case 1253:
case 3242:
case 1698:
case 3365:
case 1306:
case 638:
case 1124:
case 2254:
case 825:
case 3662:
case 1907:
case 375:
case 2123:
case 185:
case 811:
case 3461:
case 2065:
case 3449:
case 184:
case 3696:
case 2876:
case 318:
case 1663:
case 2244:
case 508:
case 3921:
case 3944:
case 3022:
case 1165:
case 1619:
case 989:
case 3324:
case 656:
case 2745:
case 685:
case 3730:
case 3636:
case 516:
case 2322:
case 2024:
case 2013:
case 138:
case 1108:
case 1781:
case 4046:
case 4020:
case 1615:
case 2749:
case 2761:
case 2189:
case 1151:
case 3589:
case 4056:
case 244:
case 2629:
case 236:
case 2490:
case 1913:
case 1924:
case 1100:
case 4028:
case 664:
case 497:
case 3719:
case 341:
case 969:
case 1819:
case 1630:
case 848:
case 70:
case 2484:
case 3836:
case 3289:
case 3043:
case 1052:
case 3121:
case 2521:
case 1483:
case 2353:
case 1815:
case 3681:
case 720:
case 2914:
case 1107:
case 2343:
case 3738:
case 3482:
case 581:
case 1594:
case 1280:
case 2801:
case 488:
case 1588:
case 59:
case 1272:
case 88:
case 3810:
case 547:
case 3332:
case 3168:
case 2858:
case 2647:
case 2260:
case 2509:
case 2568:
case 4045:
case 269:
case 177:
case 3817:
case 1479:
case 1717:
case 2640:
case 2626:
case 1371:
case 2267:
case 2593:
case 3193:
case 3231:
case 833:
case 2334:
case 1166:
case 2505:
case 3618:
case 1174:
case 2567:
case 3933:
case 290:
case 3167:
case 468:
case 2648:
case 2857:
case 2601:
case 1739:
case 412:
case 2728:
case 86:
case 3286:
case 143:
case 2205:
case 936:
case 2402:
case 2847:
case 2658:
case 1932:
case 3716:
case 3617:
case 3971:
case 367:
case 1580:
case 2826:
case 1735:
case 2840:
case 1294:
case 15:
case 2560:
case 2173:
case 2209:
case 1718:
case 3404:
case 3818:
case 782:
case 2675:
case 1795:
case 1457:
case 3909:
case 3968:
case 1234:
case 1073:
case 3428:
case 283:
case 3803:
case 1703:
case 3702:
case 1367:
case 579:
case 1447:
case 2416:
case 958:
case 2679:
case 149:
case 1031:
case 3993:
case 1440:
case 1426:
case 4082:
case 1992:
case 643:
case 2986:
case 2074:
case 870:
case 3591:
case 1401:
case 1132:
case 2875:
case 3695:
case 2066:
case 3603:
case 1309:
case 2931:
case 435:
case 434:
case 2092:
case 3291:
case 706:
case 839:
case 2394:
case 3427:
case 1602:
case 446:
case 350:
case 1974:
case 600:
case 2879:
case 3446:
case 1534:
case 1305:
case 3960:
case 928:
case 3392:
case 62:
case 530:
case 3171:
case 1195:
case 2018:
case 986:
case 3050:
case 2927:
case 153:
case 1103:
case 1279:
case 2357:
case 2035:
case 3431:
case 3339:
case 1199:
case 3047:
case 732:
case 4052:
case 14:
case 1480:
case 1275:
case 794:
case 6:
case 1472:
case 2039:
case 795:
case 1917:
case 1671:
case 527:
case 3057:
case 2920:
case 2791:
case 810:
case 3916:
case 1575:
case 1732:
case 1056:
case 3832:
case 438:
case 2928:
case 3204:
case 83:
case 1020:
case 3733:
case 1046:
case 123:
case 883:
case 2010:
case 924:
case 1935:
case 3317:
case 629:
case 3048:
case 1871:
case 3771:
case 2894:
case 1501:
case 1240:
case 484:
case 3902:
case 3527:
case 2375:
case 1250:
case 1558:
case 2433:
case 456:
case 3079:
case 1995:
case 340:
case 1868:
case 1809:
case 3520:
case 3546:
case 890:
case 3228:
case 721:
case 2786:
case 2146:
case 2680:
case 26:
case 1434:
case 1660:
case 778:
case 2216:
case 2379:
case 3705:
case 3866:
case 3556:
case 3075:
case 2471:
case 2694:
case 869:
case 1302:
case 1774:
case 1867:
case 464:
case 2688:
case 697:
case 1557:
case 3767:
case 2128:
case 472:
case 1139:
case 3246:
case 3528:
case 751:
case 3395:
case 64:
case 3256:
case 2731:
case 948:
case 3116:
case 1668:
case 233:
case 159:
case 1248:
case 560:
case 1201:
case 2872:
case 1526:
case 3692:
case 1860:
case 2773:
case 653:
case 3399:
case 1693:
case 1258:
case 1118:
case 2095:
case 991:
case 3227:
case 3196:
case 2407:
case 502:
case 1582:
case 1570:
case 2753:
case 3315:
case 1937:
case 2562:
case 2183:
case 759:
case 1025:
case 2852:
case 3162:
case 2623:
case 2614:
case 861:
case 1198:
case 3319:
case 1624:
case 2400:
case 2038:
case 1029:
case 3854:
case 2164:
case 816:
case 151:
case 1754:
case 3564:
case 960:
case 2451:
case 3055:
case 114:
case 388:
case 2722:
case 2176:
case 2359:
case 2642:
case 3264:
case 1938:
case 591:
case 1277:
case 2361:
case 2652:
case 913:
case 2349:
case 276:
case 2814:
case 2469:
case 2408:
case 3045:
case 1919:
case 3644:
case 1282:
case 1270:
case 2037:
case 3713:
case 2355:
case 1824:
case 2925:
case 2345:
case 3283:
case 3654:
case 3061:
case 2262:
case 1561:
case 2236:
case 1549:
case 3422:
case 3962:
case 2983:
case 335:
case 927:
case 723:
case 1963:
case 3078:
case 3390:
case 1841:
case 1423:
case 1808:
case 1869:
case 3181:
case 1130:
case 2885:
case 1545:
case 205:
case 3229:
case 615:
case 621:
case 554:
case 614:
case 678:
case 1706:
case 204:
case 4088:
case 1555:
case 3806:
case 1984:
case 3077:
case 1651:
case 525:
case 1807:
case 993:
case 3529:
case 797:
case 1442:
case 3821:
case 1255:
case 1721:
case 1608:
case 74:
case 132:
case 194:
case 2098:
case 1115:
case 2685:
case 2711:
case 4087:
case 1997:
case 3525:
case 1083:
case 3136:
case 2536:
case 1249:
case 3700:
case 2063:
case 753:
case 1665:
case 957:
case 3606:
case 2849:
case 3151:
case 1589:
case 2551:
case 2012:
case 3211:
case 2943:
case 3837:
case 1881:
case 2200:
case 2508:
case 3615:
case 2541:
case 3169:
case 3141:
case 2859:
case 3023:
case 1954:
case 2207:
case 437:
case 662:
case 558:
case 4001:
case 2565:
case 1313:
case 1106:
case 2855:
case 979:
case 3165:
case 2496:
case 3107:
case 2661:
case 2352:
case 805:
case 296:
case 2507:
case 4050:
case 571:
case 1738:
case 4026:
case 3637:
case 4040:
case 3815:
case 2044:
case 1681:
case 2342:
case 198:
case 2645:
case 3511:
case 3630:
case 4047:
case 2111:
case 3736:
case 3052:
case 1912:
case 3354:
case 3344:
case 2500:
case 682:
case 3913:
case 3924:
case 2241:
case 1477:
case 1719:
case 2655:
case 3908:
case 822:
case 3796:
case 3941:
case 1896:
case 3321:
case 2882:
case 372:
case 1763:
case 1542:
case 3690:
case 3429:
case 1862:
case 2143:
case 2783:
case 1552:
case 1300:
case 3965:
case 1906:
case 99:
case 326:
case 1223:
case 2764:
case 876:
case 947:
case 743:
case 281:
case 2006:
case 118:
case 1449:
case 384:
case 1696:
case 2670:
case 1790:
case 2682:
case 1921:
case 1308:
case 3663:
case 1341:
case 3890:
case 162:
case 1351:
case 700:
case 385:
case 1459:
case 440:
case 4079:
case 3085:
case 1514:
case 2878:
case 1242:
case 3124:
case 2524:
case 545:
case 1365:
case 72:
case 544:
case 2385:
case 1112:
case 3243:
case 1797:
case 2677:
case 261:
case 3089:
case 4075:
case 120:
case 590:
case 3450:
case 880:
case 349:
case 1087:
case 3360:
case 3966:
case 3440:
case 3426:
case 2232:
case 3031:
case 4083:
case 1702:
case 1374:
case 2988:
case 667:
case 3447:
case 432:
case 1909:
case 1968:
case 916:
case 3457:
case 495:
case 3703:
case 3073:
case 2439:
case 1428:
case 2386:
case 29:
case 4076:
case 1094:
case 1392:
case 1088:
case 2779:
case 1699:
case 2417:
case 3393:
case 738:
case 247:
case 813:
case 1366:
case 3534:
case 1427:
case 3602:
case 3974:
case 3458:
case 687:
case 1967:
case 150:
case 1695:
case 2005:
case 3448:
case 2987:
case 1603:
case 3309:
case 1193:
case 3166:
case 2566:
case 1231:
case 2033:
case 3479:
case 300:
case 187:
case 2820:
case 377:
case 1817:
case 3371:
case 3192:
case 827:
case 3710:
case 1034:
case 1810:
case 2827:
case 942:
case 996:
case 415:
case 1109:
case 1168:
case 3280:
case 819:
case 2194:
case 3475:
case 3588:
case 2071:
case 414:
case 3594:
case 3333:
case 87:
case 1573:
case 893:
case 2934:
case 2656:
case 1818:
case 583:
case 3718:
case 772:
case 1971:
case 2620:
case 2172:
case 2726:
case 2740:
case 3580:
case 765:
case 21:
case 3288:
case 3735:
case 3572:
case 2627:
case 1610:
case 3816:
case 3587:
case 1167:
case 857:
case 3174:
case 3091:
case 2292:
case 2403:
case 343:
case 2828:
case 1286:
case 3739:
case 3247:
case 3660:
case 3805:
case 1556:
case 3999:
case 257:
case 1520:
case 1546:
case 317:
case 2886:
case 1228:
case 2517:
case 3434:
case 3257:
case 3792:
case 2631:
case 3903:
case 2218:
case 1527:
case 2158:
case 140:
case 1079:
case 1709:
case 3548:
case 3226:
case 3667:
case 2148:
case 2788:
case 329:
case 462:
case 1902:
case 81:
case 637:
case 2873:
case 103:
case 3693:
case 2150:
case 3605:
case 1666:
case 712:
case 1491:
case 219:
case 359:
case 1692:
case 3248:
case 3201:
case 2002:
case 27:
case 3526:
case 2831:
case 1395:
case 1303:
case 3668:
case 2147:
case 2975:
case 3547:
case 539:
case 1767:
case 2157:
case 1220:
case 2539:
case 4053:
case 701:
case 397:
case 2891:
case 1504:
case 3917:
case 441:
case 922:
case 2599:
case 2016:
case 3480:
case 3275:
case 533:
case 3472:
case 1318:
case 34:
case 1040:
case 1102:
case 1431:
case 109:
case 2901:
case 3487:
case 3633:
case 1632:
case 2595:
case 2958:
case 976:
case 3316:
case 3279:
case 213:
case 1050:
case 353:
case 1317:
case 2926:
case 735:
case 2466:
case 1771:
case 299:
case 1048:
case 1001:
case 3871:
case 640:
case 792:
case 3918:
case 2203:
case 323:
case 1486:
case 2179:
case 3579:
case 406:
case 734:
case 873:
case 3027:
case 2734:
case 2950:
case 746:
case 1204:
case 2957:
case 1733:
case 56:
case 2175:
case 1310:
case 3494:
case 3488:
case 2947:
case 2299:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750341601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,];
var gg_b = "1750341601/";

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
