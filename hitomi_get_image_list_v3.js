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
case 84:
case 1032:
case 2083:
case 518:
case 1077:
case 3502:
case 2770:
case 2953:
case 3015:
case 706:
case 264:
case 3626:
case 1216:
case 1327:
case 2878:
case 1181:
case 2491:
case 2613:
case 2200:
case 3092:
case 3124:
case 1553:
case 2399:
case 143:
case 526:
case 3610:
case 3628:
case 1220:
case 3641:
case 2417:
case 3080:
case 3950:
case 4007:
case 2979:
case 2462:
case 1280:
case 1593:
case 189:
case 2359:
case 3688:
case 2875:
case 1930:
case 2101:
case 3990:
case 944:
case 3264:
case 1003:
case 3020:
case 1146:
case 3533:
case 463:
case 2119:
case 2854:
case 1160:
case 206:
case 62:
case 310:
case 2530:
case 512:
case 3625:
case 3184:
case 1215:
case 3277:
case 1739:
case 2831:
case 2373:
case 1342:
case 1121:
case 1387:
case 501:
case 1214:
case 2896:
case 4079:
case 850:
case 2029:
case 2747:
case 214:
case 3126:
case 1733:
case 2855:
case 2527:
case 2379:
case 2471:
case 3072:
case 3265:
case 3037:
case 2353:
case 2898:
case 30:
case 1097:
case 2874:
case 221:
case 2393:
case 3209:
case 480:
case 1702:
case 2858:
case 1065:
case 1272:
case 2243:
case 1144:
case 1237:
case 496:
case 1057:
case 3266:
case 3382:
case 3188:
case 3240:
case 3211:
case 1648:
case 3125:
case 3970:
case 3753:
case 3684:
case 1330:
case 2436:
case 2812:
case 2895:
case 360:
case 971:
case 47:
case 805:
case 3268:
case 413:
case 2619:
case 823:
case 2722:
case 1573:
case 187:
case 3186:
case 2150:
case 3403:
case 105:
case 1420:
case 1864:
case 198:
case 3581:
case 334:
case 1744:
case 935:
case 1524:
case 123:
case 546:
case 329:
case 1102:
case 2217:
case 1904:
case 638:
case 2122:
case 473:
case 1832:
case 2094:
case 2310:
case 1416:
case 3786:
case 3815:
case 1877:
case 2924:
case 82:
case 3153:
case 3725:
case 4041:
case 3545:
case 1639:
case 4028:
case 3892:
case 2054:
case 1492:
case 2563:
case 2388:
case 457:
case 3659:
case 2182:
case 64:
case 252:
case 3919:
case 3432:
case 4088:
case 2713:
case 3477:
case 3852:
case 3816:
case 1963:
case 1584:
case 109:
case 2190:
case 939:
case 2386:
case 2262:
case 192:
case 3521:
case 3741:
case 150:
case 4086:
case 2941:
case 1526:
case 3837:
case 1746:
case 2324:
case 1866:
case 3465:
case 2098:
case 2271:
case 1602:
case 730:
case 2701:
case 3679:
case 2508:
case 4024:
case 1809:
case 2650:
case 2074:
case 1897:
case 1721:
case 1510:
case 1528:
case 581:
case 2569:
case 138:
case 394:
case 1541:
case 1414:
case 3784:
case 908:
case 995:
case 46:
case 1908:
case 889:
case 3107:
case 2985:
case 572:
case 1811:
case 623:
case 605:
case 2235:
case 698:
case 1760:
case 1363:
case 2236:
case 3544:
case 3724:
case 3440:
case 3693:
case 3411:
case 1588:
case 2012:
case 843:
case 937:
case 3468:
case 2095:
case 3814:
case 3159:
case 885:
case 1633:
case 3301:
case 2925:
case 107:
case 3409:
case 3497:
case 2384:
case 3173:
case 2058:
case 1586:
case 3319:
case 14:
case 4084:
case 1525:
case 1857:
case 2443:
case 2690:
case 3146:
case 1533:
case 183:
case 2727:
case 718:
case 417:
case 3003:
case 145:
case 2163:
case 1264:
case 894:
case 3644:
case 1370:
case 2476:
case 1688:
case 0:
case 3593:
case 389:
case 2049:
case 3148:
case 2494:
case 3387:
case 469:
case 726:
case 88:
case 2590:
case 1277:
case 1625:
case 2283:
case 1799:
case 2478:
case 1707:
case 110:
case 3160:
case 465:
case 2834:
case 1685:
case 2223:
case 1092:
case 226:
case 3181:
case 1922:
case 2550:
case 3327:
case 3216:
case 1015:
case 2431:
case 491:
case 149:
case 647:
case 564:
case 2339:
case 2862:
case 2742:
case 2475:
case 218:
case 2787:
case 712:
case 3220:
case 2669:
case 2104:
case 1610:
case 984:
case 1628:
case 4039:
case 3064:
case 343:
case 3145:
case 3553:
case 32:
case 1188:
case 1382:
case 2333:
case 1266:
case 1779:
case 3237:
case 3144:
case 3065:
case 2663:
case 1297:
case 3702:
case 768:
case 2474:
case 467:
case 3573:
case 387:
case 521:
case 834:
case 160:
case 1390:
case 1014:
case 2496:
case 1684:
case 3330:
case 1125:
case 1970:
case 683:
case 2467:
case 419:
case 645:
case 3621:
case 942:
case 2412:
case 3011:
case 3733:
case 2456:
case 1350:
case 1126:
case 2836:
case 3681:
case 3068:
case 803:
case 147:
case 649:
case 825:
case 2302:
case 3097:
case 1141:
case 440:
case 2169:
case 1110:
case 2604:
case 2838:
case 2106:
case 1037:
case 3599:
case 93:
case 514:
case 1072:
case 1816:
case 2501:
case 475:
case 2483:
case 1432:
case 2294:
case 4044:
case 1919:
case 746:
case 1546:
case 3305:
case 1659:
case 2344:
case 2278:
case 1818:
case 1464:
case 574:
case 1901:
case 350:
case 586:
case 1560:
case 2519:
case 590:
case 1741:
case 1710:
case 2946:
case 2017:
case 309:
case 2849:
case 1861:
case 3461:
case 2062:
case 1313:
case 129:
case 627:
case 3102:
case 1880:
case 558:
case 3524:
case 323:
case 1179:
case 670:
case 904:
case 3744:
case 398:
case 1788:
case 3420:
case 860:
case 3418:
case 305:
case 2034:
case 479:
case 1892:
case 1545:
case 1725:
case 1699:
case 2231:
case 3452:
case 3369:
case 307:
case 4046:
case 993:
case 1814:
case 1159:
case 3781:
case 1693:
case 1411:
case 2267:
case 849:
case 332:
case 7:
case 625:
case 1724:
case 1544:
case 3363:
case 3745:
case 3437:
case 916:
case 781:
case 4048:
case 3525:
case 2071:
case 34:
case 2360:
case 2704:
case 2274:
case 1173:
case 2321:
case 2142:
case 754:
case 278:
case 772:
case 2187:
case 453:
case 2348:
case 2944:
case 2630:
case 1409:
case 2258:
case 420:
case 810:
case 1679:
case 2038:
case 4081:
case 3906:
case 281:
case 2513:
case 18:
case 2763:
case 1465:
case 778:
case 2127:
case 272:
case 3746:
case 3526:
case 3969:
case 477:
case 254:
case 1457:
case 1872:
case 634:
case 3760:
case 3304:
case 1199:
case 922:
case 1913:
case 2345:
case 1107:
case 170:
case 127:
case 3139:
case 883:
case 3868:
case 338:
case 3748:
case 3510:
case 2295:
case 1244:
case 2827:
case 173:
case 1378:
case 2555:
case 1974:
case 11:
case 3288:
case 2717:
case 211:
case 958:
case 2596:
case 379:
case 1998:
case 1955:
case 1085:
case 2008:
case 1376:
case 813:
case 1967:
case 3168:
case 3459:
case 2574:
case 66:
case 3362:
case 724:
case 3140:
case 1026:
case 1899:
case 235:
case 3111:
case 3225:
case 1615:
case 3226:
case 409:
case 1616:
case 2734:
case 1995:
case 1652:
case 297:
case 3407:
case 3499:
case 1912:
case 450:
case 2751:
case 3935:
case 3603:
case 1618:
case 3241:
case 990:
case 2887:
case 2842:
case 157:
case 659:
case 566:
case 600:
case 3044:
case 3391:
case 2649:
case 375:
case 1958:
case 1661:
case 2005:
case 1088:
case 711:
case 2512:
case 438:
case 737:
case 3045:
case 1976:
case 1367:
case 261:
case 1246:
case 1879:
case 1180:
case 208:
case 295:
case 3802:
case 1672:
case 799:
case 1396:
case 2490:
case 2576:
case 377:
case 3177:
case 1115:
case 836:
case 3640:
case 3934:
case 3493:
case 1248:
case 3668:
case 155:
case 3951:
case 2735:
case 2482:
case 61:
case 1260:
case 3081:
case 1192:
case 522:
case 673:
case 1281:
case 3060:
case 3453:
case 2736:
case 353:
case 941:
case 3991:
case 159:
case 1893:
case 593:
case 3021:
case 2575:
case 1116:
case 1152:
case 3048:
case 1161:
case 1395:
case 299:
case 1245:
case 3479:
case 516:
case 795:
case 3103:
case 407:
case 1120:
case 202:
case 2830:
case 3335:
case 1752:
case 2808:
case 744:
case 1716:
case 3486:
case 1509:
case 59:
case 1597:
case 3425:
case 1826:
case 3572:
case 2136:
case 1099:
case 3537:
case 1566:
case 2968:
case 35:
case 2662:
case 4077:
case 1540:
case 859:
case 2806:
case 3488:
case 1718:
case 2997:
case 576:
case 2909:
case 551:
case 1828:
case 964:
case 2138:
case 2377:
case 2869:
case 1761:
case 2529:
case 2087:
case 3410:
case 1780:
case 2042:
case 3441:
case 136:
case 680:
case 2171:
case 906:
case 369:
case 2805:
case 3207:
case 86:
case 3299:
case 613:
case 3426:
case 1825:
case 2303:
case 1059:
case 3349:
case 1989:
case 2691:
case 3732:
case 317:
case 3580:
case 1421:
case 3293:
case 1448:
case 2397:
case 2636:
case 2309:
case 4066:
case 1053:
case 340:
case 2977:
case 1983:
case 3881:
case 2932:
case 2247:
case 2419:
case 2282:
case 2134:
case 771:
case 1446:
case 3845:
case 2804:
case 1079:
case 1532:
case 2964:
case 2583:
case 288:
case 2290:
case 3515:
case 2162:
case 1329:
case 2368:
case 1202:
case 2117:
case 271:
case 3516:
case 2903:
case 3552:
case 3766:
case 2863:
case 17:
case 3949:
case 1389:
case 1772:
case 487:
case 113:
case 3846:
case 3279:
case 1737:
case 2191:
case 3424:
case 180:
case 636:
case 3518:
case 3711:
case 1884:
case 873:
case 3561:
case 2222:
case 4065:
case 1093:
case 81:
case 921:
case 548:
case 3848:
case 4057:
case 3900:
case 3086:
case 1317:
case 2870:
case 266:
case 403:
case 815:
case 2623:
case 1285:
case 3439:
case 3859:
case 1499:
case 1407:
case 233:
case 2571:
case 3652:
case 3616:
case 3995:
case 1226:
case 2427:
case 3088:
case 597:
case 2535:
case 1391:
case 2206:
case 653:
case 1044:
case 524:
case 831:
case 357:
case 3873:
case 3331:
case 1241:
case 539:
case 1603:
case 3998:
case 1197:
case 677:
case 1109:
case 3041:
case 1473:
case 2442:
case 3028:
case 3394:
case 2487:
case 2205:
case 31:
case 3974:
case 1166:
case 3680:
case 373:
case 3378:
case 3137:
case 946:
case 1938:
case 3172:
case 3615:
case 3996:
case 1225:
case 3899:
case 1111:
case 819:
case 3026:
case 766:
case 1140:
case 429:
case 3807:
case 1362:
case 2129:
case 2538:
case 2013:
case 3955:
case 1048:
case 3358:
case 2689:
case 359:
case 3893:
case 3084:
case 2796:
case 2123:
case 2882:
case 502:
case 153:
case 3931:
case 2755:
case 3614:
case 2847:
case 3281:
case 216:
case 2767:
case 599:
case 2019:
case 1917:
case 1046:
case 3120:
case 1103:
case 3356:
case 3312:
case 3245:
case 2798:
case 2001:
case 293:
case 1665:
case 2890:
case 3161:
case 3637:
case 3672:
case 1802:
case 2758:
case 470:
case 36:
case 2534:
case 3246:
case 3879:
case 1164:
case 1336:
case 1045:
case 1697:
case 494:
case 3398:
case 972:
case 3192:
case 120:
case 561:
case 2756:
case 1081:
case 2712:
case 355:
case 1640:
case 981:
case 716:
case 1934:
case 3115:
case 595:
case 1338:
case 177:
case 679:
case 508:
case 1132:
case 1300:
case 1764:
case 3888:
case 3323:
case 2227:
case 336:
case 2675:
case 877:
case 1441:
case 820:
case 2158:
case 3073:
case 2469:
case 410:
case 1410:
case 1428:
case 784:
case 1777:
case 2408:
case 3886:
case 3715:
case 1732:
case 2654:
case 4020:
case 1349:
case 776:
case 3059:
case 2112:
case 751:
case 2156:
case 2320:
case 1426:
case 2318:
case 3825:
case 4061:
case 1299:
case 2631:
case 3792:
case 3565:
case 276:
case 15:
case 2694:
case 3566:
case 615:
case 3099:
case 2155:
case 2723:
case 284:
case 2543:
case 3007:
case 1425:
case 1039:
case 918:
case 2678:
case 3509:
case 2380:
case 251:
case 2242:
case 4092:
case 631:
case 3568:
case 29:
case 853:
case 3761:
case 2972:
case 3383:
case 1943:
case 2315:
case 3828:
case 2937:
case 3810:
case 2198:
case 2676:
case 3720:
case 3718:
case 3511:
case 4015:
case 3540:
case 313:
case 3445:
case 1846:
case 3737:
case 3772:
case 2500:
case 3389:
case 2658:
case 2801:
case 2920:
case 2175:
case 742:
case 2090:
case 119:
case 1900:
case 1848:
case 962:
case 571:
case 2131:
case 2656:
case 1561:
case 2549:
case 3884:
case 1711:
case 2082:
case 1518:
case 1740:
case 2695:
case 2952:
case 1424:
case 669:
case 556:
case 2154:
case 3233:
case 691:
case 3824:
case 23:
case 2789:
case 2372:
case 968:
case 2915:
case 2178:
case 875:
case 901:
case 3714:
case 40:
case 4072:
case 4037:
case 2022:
case 1580:
case 1515:
case 3577:
case 2698:
case 2176:
case 3446:
case 1845:
case 2674:
case 242:
case 447:
case 2014:
case 1496:
case 2390:
case 3895:
case 2268:
case 3722:
case 3619:
case 2186:
case 1229:
case 2240:
case 1467:
case 2970:
case 2125:
case 3436:
case 2684:
case 2753:
case 1835:
case 52:
case 1455:
case 3856:
case 3243:
case 2779:
case 2266:
case 3750:
case 2347:
case 1105:
case 321:
case 70:
case 3393:
case 162:
case 3858:
case 1570:
case 587:
case 1663:
case 2128:
case 2110:
case 1458:
case 2141:
case 2539:
case 931:
case 43:
case 2265:
case 2072:
case 1043:
case 1730:
case 3353:
case 1106:
case 2257:
case 314:
case 1289:
case 2126:
case 1456:
case 2350:
case 3782:
case 760:
case 442:
case 2185:
case 1108:
case 618:
case 1495:
case 3896:
case 2625:
case 2184:
case 1590:
case 1933:
case 3373:
case 1494:
case 2016:
case 3451:
case 2052:
case 1891:
case 3854:
case 3119:
case 306:
case 881:
case 969:
case 2707:
case 3530:
case 2990:
case 8:
case 749:
case 4070:
case 2020:
case 283:
case 1049:
case 2061:
case 1605:
case 2688:
case 2370:
case 1522:
case 2080:
case 118:
case 783:
case 3249:
case 2950:
case 3979:
case 249:
case 1902:
case 95:
case 1104:
case 2610:
case 2641:
case 668:
case 3878:
case 2922:
case 1454:
case 3491:
case 2092:
case 2685:
case 878:
case 49:
case 3083:
case 965:
case 1431:
case 2502:
case 710:
case 3953:
case 2759:
case 1704:
case 2466:
case 953:
case 532:
case 3443:
case 1298:
case 330:
case 3690:
case 416:
case 3238:
case 78:
case 2497:
case 1630:
case 1944:
case 4019:
case 1348:
case 3988:
case 178:
case 1321:
case 507:
case 2159:
case 2814:
case 3647:
case 2301:
case 2544:
case 2724:
case 54:
case 428:
case 2440:
case 2411:
case 3012:
case 493:
case 270:
case 2107:
case 1345:
case 2913:
case 3506:
case 3055:
case 1489:
case 3719:
case 3235:
case 1:
case 3926:
case 294:
case 3096:
case 181:
case 2679:
case 3074:
case 2457:
case 3941:
case 154:
case 172:
case 3098:
case 3324:
case 28:
case 1687:
case 2673:
case 729:
case 203:
case 3325:
case 2818:
case 1276:
case 3386:
case 1017:
case 2728:
case 2710:
case 2521:
case 3075:
case 1769:
case 678:
case 2919:
case 2193:
case 592:
case 2432:
case 2852:
case 2477:
case 2785:
case 1501:
case 3054:
case 3670:
case 3563:
case 1800:
case 2659:
case 374:
case 3147:
case 352:
case 3182:
case 2546:
case 862:
case 3078:
case 3400:
case 1254:
case 2725:
case 2545:
case 1423:
case 2892:
case 654:
case 523:
case 672:
case 3122:
case 3883:
case 1981:
case 1051:
case 2815:
case 2786:
case 3094:
case 2607:
case 703:
case 1945:
case 2880:
case 404:
case 1275:
case 1062:
case 3217:
case 1627:
case 3326:
case 4013:
case 1705:
case 2179:
case 368:
case 3730:
case 1353:
case 3106:
case 2507:
case 3043:
case 1471:
case 874:
case 2097:
case 2645:
case 547:
case 3169:
case 3458:
case 886:
case 72:
case 301:
case 3495:
case 1896:
case 3108:
case 2214:
case 1999:
case 50:
case 1379:
case 3412:
case 488:
case 1527:
case 1855:
case 3289:
case 114:
case 787:
case 2040:
case 3836:
case 471:
case 1812:
case 2330:
case 1959:
case 913:
case 2621:
case 3229:
case 287:
case 1587:
case 1619:
case 482:
case 4030:
case 3496:
case 456:
case 2702:
case 1438:
case 2646:
case 362:
case 2559:
case 1393:
case 121:
case 22:
case 2987:
case 606:
case 3105:
case 1973:
case 3333:
case 2237:
case 980:
case 1243:
case 3498:
case 2065:
case 2220:
case 3669:
case 2064:
case 243:
case 3902:
case 1399:
case 3606:
case 1979:
case 3742:
case 1876:
case 1249:
case 3787:
case 3522:
case 318:
case 2216:
case 549:
case 2252:
case 164:
case 1770:
case 4027:
case 1083:
case 2032:
case 2579:
case 3223:
case 3834:
case 1613:
case 3454:
case 1491:
case 1878:
case 1023:
case 583:
case 3000:
case 106:
case 3891:
case 1854:
case 1119:
case 2148:
case 2387:
case 3494:
case 1451:
case 963:
case 3590:
case 3283:
case 1101:
case 3817:
case 2644:
case 1875:
case 743:
case 1359:
case 289:
case 3605:
case 2280:
case 3049:
case 1462:
case 312:
case 3727:
case 3163:
case 4004:
case 1829:
case 96:
case 2414:
case 1096:
case 2541:
case 238:
case 1569:
case 3:
case 1926:
case 2528:
case 3212:
case 2304:
case 3489:
case 1622:
case 1719:
case 1506:
case 2811:
case 2840:
case 707:
case 3345:
case 1271:
case 1324:
case 372:
case 1928:
case 2969:
case 1941:
case 354:
case 570:
case 3843:
case 3381:
case 3258:
case 2897:
case 1074:
case 1650:
case 2809:
case 658:
case 3038:
case 3513:
case 806:
case 381:
case 3274:
case 2586:
case 3142:
case 378:
case 1988:
case 1384:
case 3630:
case 1238:
case 130:
case 1690:
case 2745:
case 864:
case 1443:
case 2472:
case 3071:
case 2525:
case 3360:
case 3704:
case 1505:
case 437:
case 1056:
case 232:
case 738:
case 3035:
case 1170:
case 1925:
case 3296:
case 3429:
case 499:
case 4063:
case 1095:
case 1647:
case 3231:
case 1924:
case 529:
case 2877:
case 2452:
case 1328:
case 2416:
case 4006:
case 2369:
case 1883:
case 3981:
case 158:
case 3034:
case 411:
case 3423:
case 2639:
case 534:
case 91:
case 3254:
case 1078:
case 4069:
case 1400:
case 792:
case 2420:
case 2864:
case 1150:
case 4008:
case 1217:
case 3275:
case 2102:
case 2308:
case 1076:
case 435:
case 705:
case 3769:
case 497:
case 1262:
case 798:
case 2480:
case 1386:
case 3946:
case 3276:
case 3849:
case 723:
case 1325:
case 3130:
case 3706:
case 2803:
case 3642:
case 439:
case 3687:
case 3519:
case 2133:
case 503:
case 152:
case 1182:
case 1823:
case 174:
case 2305:
case 3948:
case 186:
case 630:
case 1984:
case 3344:
case 2492:
case 3278:
case 3091:
case 190:
case 3501:
case 1713:
case 3294:
case 957:
case 1251:
case 3960:
case 641:
case 3554:
case 1591:
case 633:
case 3063:
case 3450:
case 500:
case 2103:
case 3830:
case 193:
case 1001:
case 1796:
case 2991:
case 3422:
case 2021:
case 2048:
case 1019:
case 3100:
case 777:
case 2224:
case 1882:
case 3447:
case 4038:
case 2081:
case 2284:
case 1822:
case 2177:
case 454:
case 277:
case 1795:
case 1562:
case 2640:
case 2493:
case 308:
case 3594:
case 395:
case 1551:
case 3643:
case 994:
case 4:
case 3578:
case 2697:
case 2045:
case 1430:
case 2336:
case 2164:
case 604:
case 3004:
case 361:
case 122:
case 2165:
case 2044:
case 2157:
case 275:
case 3649:
case 616:
case 3512:
case 3595:
case 3762:
case 3887:
case 1776:
case 2971:
case 3842:
case 83:
case 842:
case 3213:
case 1208:
case 1623:
case 166:
case 1870:
case 3558:
case 1794:
case 3751:
case 2317:
case 324:
case 1571:
case 925:
case 2407:
case 2140:
case 2111:
case 573:
case 335:
case 2632:
case 4062:
case 848:
case 51:
case 1013:
case 1731:
case 3574:
case 929:
case 2839:
case 1775:
case 1487:
case 2351:
case 1442:
case 2473:
case 3596:
case 2109:
case 4034:
case 2197:
case 2664:
case 1536:
case 3143:
case 2938:
case 3555:
case 3567:
case 1205:
case 1549:
case 2768:
case 2561:
case 1612:
case 1729:
case 2821:
case 1131:
case 740:
case 2848:
case 462:
case 3191:
case 2253:
case 267:
case 2860:
case 2424:
case 1952:
case 1695:
case 1047:
case 1916:
case 2520:
case 513:
case 2711:
case 3250:
case 1404:
case 3863:
case 356:
case 1961:
case 2949:
case 3743:
case 580:
case 1500:
case 3030:
case 382:
case 2797:
case 219:
case 1090:
case 371:
case 3117:
case 1175:
case 1918:
case 1920:
case 3903:
case 2516:
case 1176:
case 3964:
case 1698:
case 3583:
case 2002:
case 2515:
case 3162:
case 833:
case 215:
case 142:
case 1674:
case 676:
case 3340:
case 3804:
case 866:
case 684:
case 3638:
case 2592:
case 719:
case 1463:
case 1696:
case 240:
case 1337:
case 1178:
case 1915:
case 2343:
case 2881:
case 3932:
case 401:
case 3419:
case 13:
case 3282:
case 69:
case 1194:
case 4043:
case 2293:
case 767:
case 468:
case 1992:
case 1655:
case 3309:
case 648:
case 1195:
case 2349:
case 1654:
case 412:
case 2732:
case 2485:
case 1408:
case 2777:
case 1070:
case 217:
case 536:
case 945:
case 2299:
case 983:
case 1318:
case 2426:
case 1156:
case 1112:
case 1675:
case 765:
case 3171:
case 2764:
case 1406:
case 2514:
case 3965:
case 2410:
case 4000:
case 3042:
case 2441:
case 3957:
case 816:
case 769:
case 426:
case 1972:
case 1287:
case 3749:
case 19:
case 3529:
case 2703:
case 291:
case 1198:
case 3909:
case 3364:
case 2425:
case 184:
case 717:
case 3700:
case 2572:
case 418:
case 2537:
case 1155:
case 828:
case 25:
case 642:
case 3651:
case 2259:
case 151:
case 1813:
case 3808:
case 2486:
case 1196:
case 3270:
case 2248:
case 2374:
case 611:
case 3795:
case 2221:
case 3822:
case 3183:
case 2024:
case 3756:
case 3712:
case 3629:
case 1735:
case 2853:
case 2994:
case 1447:
case 255:
case 1219:
case 3534:
case 322:
case 2879:
case 2976:
case 3430:
case 3263:
case 1771:
case 2355:
case 2637:
case 2396:
case 938:
case 844:
case 2672:
case 3758:
case 1594:
case 195:
case 26:
case 4055:
case 2180:
case 3001:
case 4056:
case 907:
case 3774:
case 2161:
case 1149:
case 102:
case 1450:
case 2312:
case 76:
case 1063:
case 4095:
case 1554:
case 3123:
case 3882:
case 441:
case 2931:
case 1736:
case 4058:
case 3847:
case 2614:
case 200:
case 2281:
case 3019:
case 2152:
case 2116:
case 430:
case 2358:
case 3517:
case 2954:
case 579:
case 3129:
case 882:
case 608:
case 2085:
case 3538:
case 2955:
case 856:
case 2996:
case 2615:
case 871:
case 3754:
case 3683:
case 1791:
case 2899:
case 135:
case 4076:
case 661:
case 2807:
case 1567:
case 21:
case 2680:
case 1006:
case 2378:
case 1827:
case 4094:
case 2244:
case 2998:
case 1596:
case 1069:
case 111:
case 3487:
case 2394:
case 3775:
case 2873:
case 257:
case 1842:
case 2331:
case 3776:
case 773:
case 452:
case 2618:
case 2620:
case 4054:
case 486:
case 71:
case 4031:
case 2088:
case 1556:
case 490:
case 2661:
case 2354:
case 3206:
case 4075:
case 333:
case 3778:
case 3571:
case 197:
case 1734:
case 2616:
case 950:
case 3794:
case 2086:
case 366:
case 1558:
case 2956:
case 3208:
case 992:
case 1213:
case 637:
case 2859:
case 139:
case 3230:
case 3463:
case 3980:
case 3674:
case 3050:
case 1368:
case 77:
case 1162:
case 414:
case 2577:
case 1583:
case 1964:
case 3698:
case 713:
case 1636:
case 2448:
case 3667:
case 780:
case 3194:
case 2421:
case 1134:
case 1282:
case 2824:
case 1366:
case 1419:
case 33:
case 1247:
case 1932:
case 2983:
case 1977:
case 3696:
case 3337:
case 515:
case 2053:
case 3178:
case 1357:
case 3047:
case 3695:
case 280:
case 3952:
case 811:
case 1365:
case 92:
case 3154:
case 3131:
case 3612:
case 1222:
case 296:
case 3549:
case 1903:
case 3918:
case 1117:
case 3314:
case 987:
case 4089:
case 835:
case 1523:
case 182:
case 2737:
case 2445:
case 213:
case 1743:
case 2389:
case 27:
case 567:
case 1863:
case 3961:
case 156:
case 3658:
case 3404:
case 1250:
case 644:
case 55:
case 1909:
case 464:
case 3392:
case 2444:
case 763:
case 3198:
case 1027:
case 1806:
case 1662:
case 3242:
case 3174:
case 1966:
case 1529:
case 3287:
case 1869:
case 1332:
case 2841:
case 2383:
case 1377:
case 1138:
case 2828:
case 3315:
case 2597:
case 1270:
case 565:
case 3196:
case 2509:
case 802:
case 3678:
case 3380:
case 2716:
case 1808:
case 2752:
case 1911:
case 3813:
case 3167:
case 376:
case 1651:
case 1968:
case 837:
case 3155:
case 2099:
case 591:
case 3723:
case 1136:
case 1700:
case 656:
case 1303:
case 2825:
case 3318:
case 2557:
case 1135:
case 895:
case 2239:
case 861:
case 3070:
case 989:
case 1413:
case 2059:
case 671:
case 517:
case 3469:
case 2073:
case 3158:
case 2780:
case 4023:
case 3352:
case 1965:
case 406:
case 1805:
case 2888:
case 1171:
case 3227:
case 3675:
case 236:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750554001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,];
var gg_b = "1750554001/";

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
