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
case 1425:
case 1843:
case 281:
case 2621:
case 1945:
case 37:
case 3110:
case 360:
case 946:
case 2133:
case 795:
case 2668:
case 2317:
case 3903:
case 1129:
case 2615:
case 1600:
case 2143:
case 3805:
case 1212:
case 3627:
case 3859:
case 2511:
case 692:
case 2355:
case 3311:
case 644:
case 2309:
case 1868:
case 2006:
case 1976:
case 3520:
case 69:
case 808:
case 345:
case 3707:
case 1260:
case 492:
case 2115:
case 1100:
case 1629:
case 529:
case 443:
case 152:
case 1519:
case 4004:
case 4080:
case 2550:
case 833:
case 2206:
case 1301:
case 2633:
case 1494:
case 3350:
case 2121:
case 2594:
case 1913:
case 2884:
case 2419:
case 242:
case 3202:
case 2157:
case 1450:
case 3162:
case 3394:
case 3789:
case 1983:
case 3604:
case 1885:
case 2814:
case 4010:
case 1589:
case 1691:
case 1899:
case 2179:
case 2495:
case 1575:
case 801:
case 616:
case 3775:
case 2463:
case 1879:
case 3223:
case 1969:
case 3763:
case 2199:
case 2475:
case 466:
case 3736:
case 147:
case 3041:
case 2581:
case 2790:
case 416:
case 3490:
case 1354:
case 2952:
case 2891:
case 3738:
case 2247:
case 1171:
case 3877:
case 3958:
case 1614:
case 3064:
case 1536:
case 2754:
case 1481:
case 1282:
case 3956:
case 3587:
case 1546:
case 3442:
case 1548:
case 400:
case 3241:
case 3897:
case 2961:
case 3746:
case 2448:
case 339:
case 3031:
case 1370:
case 2944:
case 3180:
case 2928:
case 2237:
case 2446:
case 3724:
case 440:
case 127:
case 3042:
case 1786:
case 4034:
case 535:
case 2582:
case 3813:
case 2238:
case 2447:
case 3382:
case 1140:
case 1172:
case 1788:
case 2951:
case 3915:
case 2892:
case 3898:
case 313:
case 1482:
case 3896:
case 3588:
case 1281:
case 2048:
case 3431:
case 762:
case 3232:
case 2830:
case 2741:
case 3921:
case 751:
case 2036:
case 3957:
case 2962:
case 1364:
case 1192:
case 2038:
case 3270:
case 631:
case 3242:
case 107:
case 2840:
case 2872:
case 4028:
case 3032:
case 3054:
case 4044:
case 2224:
case 1081:
case 3737:
case 3876:
case 1130:
case 3966:
case 1341:
case 4026:
case 1739:
case 431:
case 3835:
case 2289:
case 841:
case 88:
case 1803:
case 2453:
case 1692:
case 2075:
case 1905:
case 2910:
case 2063:
case 2339:
case 1959:
case 76:
case 363:
case 2349:
case 1749:
case 3943:
case 1640:
case 1672:
case 2095:
case 2275:
case 2560:
case 1274:
case 3360:
case 518:
case 1050:
case 3152:
case 1997:
case 3706:
case 3126:
case 2904:
case 817:
case 1294:
case 3144:
case 2406:
case 1856:
case 2980:
case 3128:
case 2007:
case 3161:
case 1867:
case 1250:
case 848:
case 276:
case 222:
case 3661:
case 22:
case 1773:
case 2622:
case 623:
case 758:
case 910:
case 3628:
case 2365:
case 3573:
case 603:
case 3634:
case 3652:
case 1793:
case 2316:
case 1211:
case 3518:
case 869:
case 2393:
case 3985:
case 906:
case 1718:
case 3312:
case 624:
case 2658:
case 2739:
case 2630:
case 2553:
case 4083:
case 3439:
case 2692:
case 851:
case 471:
case 1063:
case 3145:
case 3523:
case 1089:
case 3678:
case 2323:
case 977:
case 81:
case 1349:
case 650:
case 2640:
case 391:
case 1723:
case 730:
case 3449:
case 485:
case 2786:
case 227:
case 1927:
case 593:
case 384:
case 3488:
case 1447:
case 209:
case 2331:
case 1603:
case 1892:
case 3486:
case 86:
case 3635:
case 3782:
case 1046:
case 3347:
case 1024:
case 450:
case 3176:
case 575:
case 1830:
case 3564:
case 190:
case 2537:
case 3113:
case 3337:
case 1962:
case 1872:
case 1840:
case 3198:
case 2081:
case 1224:
case 3541:
case 1246:
case 2130:
case 78:
case 3196:
case 741:
case 3055:
case 4045:
case 3009:
case 932:
case 748:
case 1622:
case 3183:
case 717:
case 3493:
case 3169:
case 2793:
case 3209:
case 2412:
case 10:
case 2211:
case 1656:
case 3418:
case 1393:
case 1658:
case 4076:
case 3826:
case 1158:
case 2094:
case 896:
case 1156:
case 2274:
case 4078:
case 2822:
case 3669:
case 3220:
case 2050:
case 3971:
case 1207:
case 2460:
case 3861:
case 2997:
case 1408:
case 3502:
case 767:
case 2858:
case 2074:
case 1904:
case 356:
case 2294:
case 3683:
case 889:
case 1007:
case 3308:
case 588:
case 2506:
case 1702:
case 2508:
case 3834:
case 3852:
case 2867:
case 4013:
case 1219:
case 176:
case 3306:
case 3020:
case 8:
case 2507:
case 193:
case 235:
case 2978:
case 3307:
case 355:
case 1008:
case 2866:
case 2821:
case 2720:
case 2260:
case 261:
case 175:
case 1643:
case 2184:
case 252:
case 590:
case 2519:
case 3319:
case 332:
case 1206:
case 2301:
case 1121:
case 3750:
case 3659:
case 873:
case 3605:
case 2060:
case 4077:
case 1884:
case 453:
case 3851:
case 2843:
case 2425:
case 181:
case 1657:
case 2945:
case 956:
case 728:
case 3725:
case 3417:
case 3093:
case 1666:
case 653:
case 1133:
case 733:
case 1525:
case 25:
case 2709:
case 211:
case 1615:
case 3293:
case 2600:
case 2129:
case 1143:
case 3455:
case 3409:
case 3073:
case 3218:
case 1511:
case 3216:
case 1309:
case 247:
case 499:
case 1581:
case 1790:
case 1952:
case 2332:
case 377:
case 1247:
case 2171:
case 1436:
case 2614:
case 502:
case 1685:
case 701:
case 1732:
case 2538:
case 3880:
case 1047:
case 486:
case 3348:
case 1679:
case 249:
case 497:
case 3086:
case 3088:
case 3177:
case 2524:
case 1961:
case 3346:
case 2082:
case 3570:
case 2342:
case 1944:
case 3487:
case 1928:
case 159:
case 576:
case 2983:
case 686:
case 2885:
case 3239:
case 697:
case 3677:
case 2589:
case 4059:
case 1253:
case 1495:
case 984:
case 3363:
case 3039:
case 2114:
case 3697:
case 2671:
case 2879:
case 2969:
case 462:
case 3095:
case 3263:
case 2845:
case 2423:
case 66:
case 1523:
case 1676:
case 1678:
case 263:
case 988:
case 2539:
case 53:
case 3075:
case 3295:
case 959:
case 3339:
case 264:
case 2753:
case 871:
case 1696:
case 3289:
case 715:
case 451:
case 1439:
case 2968:
case 2032:
case 2054:
case 765:
case 3764:
case 3224:
case 2737:
case 2876:
case 3437:
case 3246:
case 1287:
case 1196:
case 1113:
case 2921:
case 1645:
case 651:
case 2957:
case 532:
case 2242:
case 2270:
case 3840:
case 1087:
case 580:
case 3388:
case 1635:
case 4058:
case 2588:
case 1347:
case 2896:
case 885:
case 2232:
case 1176:
case 4067:
case 3582:
case 1488:
case 2813:
case 555:
case 3236:
case 2290:
case 412:
case 1486:
case 470:
case 2915:
case 3656:
case 3512:
case 2985:
case 1416:
case 696:
case 724:
case 2312:
case 1914:
case 1712:
case 993:
case 703:
case 2516:
case 3318:
case 2634:
case 2652:
case 3667:
case 3316:
case 4003:
case 2565:
case 658:
case 994:
case 1183:
case 2644:
case 942:
case 3365:
case 1055:
case 32:
case 2661:
case 1473:
case 1217:
case 1465:
case 723:
case 2869:
case 246:
case 2402:
case 1852:
case 2161:
case 458:
case 3219:
case 1306:
case 3408:
case 94:
case 3904:
case 156:
case 1683:
case 2144:
case 2128:
case 1669:
case 3019:
case 1760:
case 225:
case 487:
case 1971:
case 2134:
case 3207:
case 2152:
case 1861:
case 3167:
case 198:
case 3158:
case 2360:
case 1827:
case 1750:
case 1605:
case 3594:
case 272:
case 210:
case 3419:
case 3884:
case 2202:
case 3157:
case 3800:
case 1794:
case 3550:
case 1501:
case 3166:
case 3206:
case 3633:
case 1930:
case 2350:
case 473:
case 854:
case 245:
case 180:
case 2127:
case 4:
case 3407:
case 2151:
case 3115:
case 393:
case 3006:
case 3320:
case 1307:
case 155:
case 3008:
case 2520:
case 792:
case 3511:
case 6:
case 591:
case 3355:
case 1216:
case 3309:
case 2651:
case 1293:
case 1065:
case 3143:
case 1711:
case 2627:
case 1016:
case 2325:
case 3133:
case 2517:
case 695:
case 1273:
case 4079:
case 2662:
case 3621:
case 1159:
case 2110:
case 1105:
case 1093:
case 1417:
case 260:
case 2746:
case 1542:
case 388:
case 3448:
case 2031:
case 3926:
case 886:
case 1487:
case 2180:
case 897:
case 2104:
case 2264:
case 2922:
case 1348:
case 3679:
case 3770:
case 1086:
case 2241:
case 2442:
case 1088:
case 556:
case 1177:
case 3961:
case 1346:
case 4021:
case 3037:
case 2064:
case 1338:
case 2958:
case 1590:
case 237:
case 3685:
case 766:
case 3732:
case 2231:
case 1804:
case 357:
case 1880:
case 1336:
case 2736:
case 598:
case 2041:
case 3699:
case 4015:
case 3790:
case 3581:
case 2967:
case 1197:
case 3247:
case 2381:
case 3436:
case 1697:
case 3463:
case 3053:
case 4043:
case 2763:
case 2223:
case 1363:
case 1375:
case 1677:
case 1049:
case 3495:
case 700:
case 2789:
case 4033:
case 3814:
case 1395:
case 3489:
case 2218:
case 1651:
case 311:
case 3129:
case 2293:
case 3600:
case 2711:
case 3755:
case 2810:
case 1805:
case 634:
case 3411:
case 1627:
case 2409:
case 23:
case 35:
case 2018:
case 3717:
case 3425:
case 936:
case 3012:
case 2159:
case 1110:
case 628:
case 2265:
case 2725:
case 2750:
case 4091:
case 2659:
case 1610:
case 2605:
case 3913:
case 1401:
case 1162:
case 2992:
case 3519:
case 3998:
case 428:
case 514:
case 2319:
case 3301:
case 1707:
case 2420:
case 3857:
case 106:
case 3260:
case 3100:
case 434:
case 892:
case 3978:
case 408:
case 3976:
case 1520:
case 3474:
case 1775:
case 2697:
case 2249:
case 4029:
case 3969:
case 1223:
case 401:
case 3563:
case 3114:
case 799:
case 1023:
case 3589:
case 2049:
case 3691:
case 3899:
case 3983:
case 3595:
case 1604:
case 786:
case 907:
case 797:
case 1746:
case 2542:
case 139:
case 3370:
case 621:
case 1180:
case 1104:
case 1724:
case 1922:
case 1587:
case 3546:
case 1442:
case 3548:
case 3524:
case 279:
case 2177:
case 3191:
case 1958:
case 1064:
case 3614:
case 137:
case 1432:
case 1231:
case 2804:
case 3481:
case 816:
case 3282:
case 2336:
case 1956:
case 820:
case 4084:
case 2532:
case 2554:
case 4000:
case 1041:
case 2288:
case 1490:
case 3354:
case 277:
case 2286:
case 1967:
case 1738:
case 1381:
case 3171:
case 1032:
case 283:
case 1878:
case 572:
case 3081:
case 2541:
case 1464:
case 641:
case 2196:
case 815:
case 68:
case 1090:
case 2113:
case 1957:
case 3192:
case 1270:
case 1242:
case 2178:
case 2087:
case 2782:
case 3482:
case 2347:
case 1431:
case 1070:
case 1813:
case 1747:
case 2531:
case 2984:
case 3172:
case 309:
case 968:
case 1915:
case 2900:
case 2486:
case 1943:
case 3672:
case 1845:
case 1423:
case 2449:
case 2523:
case 2135:
case 163:
case 3803:
case 3692:
case 1539:
case 3959:
case 164:
case 2353:
case 1933:
case 949:
case 1835:
case 2698:
case 560:
case 146:
case 417:
case 2308:
case 4092:
case 539:
case 3508:
case 1201:
case 1402:
case 105:
case 1161:
case 3250:
case 823:
case 95:
case 2306:
case 667:
case 336:
case 1706:
case 1126:
case 2502:
case 3858:
case 3302:
case 838:
case 3294:
case 256:
case 3856:
case 2669:
case 419:
case 4072:
case 125:
case 3050:
case 1152:
case 3460:
case 1134:
case 2861:
case 911:
case 3094:
case 2826:
case 2844:
case 3274:
case 3716:
case 2416:
case 619:
case 961:
case 3718:
case 1593:
case 2914:
case 935:
case 2712:
case 1652:
case 1634:
case 2017:
case 3793:
case 3025:
case 2209:
case 469:
case 2255:
case 3211:
case 1518:
case 1644:
case 1628:
case 617:
case 1626:
case 3011:
case 952:
case 2473:
case 2009:
case 1979:
case 467:
case 648:
case 2682:
case 4016:
case 4018:
case 84:
case 3435:
case 3686:
case 1403:
case 2853:
case 551:
case 978:
case 3911:
case 2955:
case 1335:
case 1637:
case 1085:
case 680:
case 1345:
case 1153:
case 3925:
case 655:
case 2917:
case 1279:
case 4073:
case 3445:
case 735:
case 3413:
case 1530:
case 2071:
case 480:
case 2492:
case 1901:
case 174:
case 893:
case 3277:
case 1:
case 2847:
case 2713:
case 1396:
case 1592:
case 3639:
case 3730:
case 3994:
case 3831:
case 56:
case 711:
case 208:
case 2798:
case 354:
case 3188:
case 2920:
case 3077:
case 75:
case 3841:
case 3297:
case 1572:
case 842:
case 3974:
case 2182:
case 173:
case 894:
case 2837:
case 3476:
case 432:
case 3059:
case 4049:
case 3005:
case 221:
case 3469:
case 2112:
case 679:
case 3118:
case 3116:
case 1033:
case 1383:
case 3165:
case 3205:
case 718:
case 950:
case 1233:
case 3483:
case 2783:
case 1108:
case 1728:
case 1268:
case 3561:
case 587:
case 2361:
case 2522:
case 1106:
case 1726:
case 2987:
case 2000:
case 3665:
case 3544:
case 2084:
case 3673:
case 2328:
case 1066:
case 589:
case 1458:
case 3552:
case 2808:
case 1456:
case 3981:
case 3367:
case 971:
case 1068:
case 1954:
case 1932:
case 558:
case 1734:
case 1752:
case 4086:
case 2556:
case 397:
case 2284:
case 3693:
case 1467:
case 2160:
case 479:
case 4088:
case 3321:
case 2557:
case 4087:
case 1468:
case 1874:
case 1964:
case 3357:
case 2566:
case 1421:
case 1067:
case 484:
case 112:
case 170:
case 1119:
case 2807:
case 3551:
case 2515:
case 1500:
case 3315:
case 1894:
case 3527:
case 1256:
case 2611:
case 3655:
case 2988:
case 3120:
case 1727:
case 2400:
case 1415:
case 573:
case 3801:
case 1107:
case 2484:
case 1022:
case 2819:
case 241:
case 1825:
case 2949:
case 3155:
case 371:
case 3109:
case 683:
case 3269:
case 3729:
case 997:
case 2674:
case 986:
case 3343:
case 1529:
case 729:
case 162:
case 491:
case 2125:
case 2759:
case 3333:
case 3459:
case 2533:
case 1811:
case 3117:
case 709:
case 999:
case 1359:
case 727:
case 1305:
case 2310:
case 2838:
case 3213:
case 219:
case 2836:
case 2380:
case 2491:
case 1902:
case 1148:
case 1704:
case 1124:
case 1591:
case 0:
case 1780:
case 3298:
case 2230:
case 3854:
case 1138:
case 2092:
case 3497:
case 1663:
case 2272:
case 1136:
case 2240:
case 2471:
case 158:
case 3842:
case 3870:
case 248:
case 2824:
case 2846:
case 378:
case 3276:
case 2681:
case 3714:
case 82:
case 953:
case 1163:
case 4009:
case 1203:
case 4055:
case 1636:
case 3912:
case 1638:
case 2895:
case 736:
case 3385:
case 80:
case 2579:
case 1648:
case 1624:
case 2973:
case 4017:
case 2863:
case 2875:
case 954:
case 698:
case 1195:
case 1479:
case 1003:
case 1429:
case 2443:
case 365:
case 3817:
case 1111:
case 331:
case 614:
case 1543:
case 1705:
case 1125:
case 21:
case 1650:
case 3601:
case 3953:
case 613:
case 2811:
case 3855:
case 920:
case 3559:
case 1694:
case 3505:
case 2359:
case 463:
case 2305:
case 1310:
case 2056:
case 809:
case 3226:
case 3228:
case 1521:
case 2466:
case 3244:
case 1194:
case 2058:
case 3820:
case 3757:
case 1566:
case 2421:
case 2762:
case 2222:
case 2067:
case 4070:
case 340:
case 1625:
case 2941:
case 270:
case 1568:
case 3261:
case 508:
case 3462:
case 1150:
case 664:
case 807:
case 1515:
case 2584:
case 4032:
case 4054:
case 3044:
case 3026:
case 2931:
case 1174:
case 2256:
case 315:
case 1400:
case 1986:
case 2850:
case 3234:
case 182:
case 3947:
case 2022:
case 1484:
case 3785:
case 722:
case 1889:
case 1916:
case 1993:
case 1585:
case 2636:
case 1895:
case 167:
case 944:
case 2648:
case 2624:
case 3642:
case 1875:
case 1965:
case 2003:
case 2479:
case 324:
case 287:
case 425:
case 1777:
case 119:
case 3142:
case 1491:
case 2704:
case 2148:
case 3577:
case 2689:
case 3480:
case 2881:
case 1092:
case 2675:
case 446:
case 1797:
case 117:
case 2663:
case 1471:
case 1240:
case 405:
case 836:
case 1030:
case 323:
case 3597:
case 1848:
case 1824:
case 1846:
case 2397:
case 3132:
case 3154:
case 3371:
case 2530:
case 2398:
case 344:
case 1071:
case 3888:
case 530:
case 1291:
case 3598:
case 2901:
case 2:
case 1713:
case 1847:
case 3141:
case 2313:
case 1796:
case 2592:
case 134:
case 3392:
case 1430:
case 2137:
case 3204:
case 108:
case 2882:
case 426:
case 3623:
case 2378:
case 1091:
case 295:
case 1472:
case 2376:
case 3907:
case 3080:
case 660:
case 2540:
case 3004:
case 3340:
case 3372:
case 781:
case 273:
case 1182:
case 1778:
case 582:
case 541:
case 3839:
case 672:
case 626:
case 1503:
case 1214:
case 904:
case 794:
case 923:
case 3535:
case 2403:
case 3703:
case 1909:
case 2335:
case 1955:
case 3664:
case 1014:
case 2637:
case 2085:
case 606:
case 811:
case 39:
case 2153:
case 3641:
case 2099:
case 1917:
case 437:
case 3426:
case 2728:
case 3946:
case 3428:
case 1522:
case 1987:
case 2726:
case 3444:
case 1000:
case 3051:
case 2761:
case 818:
case 3461:
case 3102:
case 2257:
case 2942:
case 1344:
case 3027:
case 4031:
case 439:
case 2066:
case 1808:
case 2458:
case 517:
case 1567:
case 1806:
case 3758:
case 1352:
case 2932:
case 2954:
case 931:
case 2752:
case 2734:
case 3227:
case 1556:
case 3062:
case 3938:
case 3936:
case 2021:
case 300:
case 2215:
case 2990:
case 3873:
case 3010:
case 3975:
case 639:
case 788:
case 3569:
case 915:
case 567:
case 2033:
case 757:
case 2812:
case 1029:
case 3995:
case 101:
case 366:
case 3583:
case 2233:
case 1783:
case 569:
case 3816:
case 609:
case 2283:
case 627:
case 3310:
case 3705:
case 2069:
case 3650:
case 3759:
case 1809:
case 2459:
case 2117:
case 3533:
case 864:
case 1329:
case 131:
case 607:
case 3674:
case 2343:
case 341:
case 1817:
case 165:
case 3111:
case 271:
case 2729:
case 2269:
case 3611:
case 2609:
case 2120:
case 429:
case 543:
case 1715:
case 1427:
case 3986:
case 1252:
case 1234:
case 1451:
case 3484:
case 4081:
case 2551:
case 921:
case 814:
case 2315:
case 3566:
case 427:
case 3568:
case 1101:
case 2321:
case 544:
case 3521:
case 1768:
case 3194:
case 3362:
case 250:
case 1779:
case 3863:
case 3875:
case 3965:
case 908:
case 2687:
case 2035:
case 1799:
case 1690:
case 2045:
case 3895:
case 1314:
case 1654:
case 3599:
case 2714:
case 3414:
case 3889:
case 2235:
case 1597:
case 805:
case 3848:
case 2096:
case 2278:
case 3846:
case 278:
case 1154:
case 1371:
case 846:
case 3181:
case 3092:
case 138:
case 3797:
case 2013:
case 2960:
case 3272:
case 2842:
case 520:
case 516:
case 4094:
case 1908:
case 2078:
case 2187:
case 3230:
case 1391:
case 2832:
case 124:
case 3072:
case 2580:
case 2791:
case 3838:
case 3777:
case 319:
case 3836:
case 3491:
case 3292:
case 3304:
case 515:
case 3776:
case 2478:
case 452:
case 2974:
case 1372:
case 826:
case 967:
case 2864:
case 2188:
case 1623:
case 1576:
case 333:
case 2772:
case 2740:
case 3472:
case 2186:
case 253:
case 540:
case 2639:
case 334:
case 806:
case 1392:
case 2994:
case 1204:
case 845:
case 1280:
case 969:
case 2496:
case 2413:
case 144:
case 1596:
case 2792:
case 2950:
case 3492:
case 1598:
case 192:
case 461:
case 2277:
case 1919:
case 411:
case 1849:
case 635:
case 2445:
case 2823:
case 661:
case 780:
case 4012:
case 1535:
case 2686:
case 3853:
case 948:
case 732:
case 1703:
case 2911:
case 3955:
case 652:
case 860:
case 3735:
case 87:
case 1631:
case 1839:
case 45:
case 3503:
case 2435:
case 297:
case 1227:
case 3556:
case 1938:
case 286:
case 2356:
case 3284:
case 839:
case 100:
case 3558:
case 1434:
case 941:
case 2616:
case 2534:
case 538:
case 4082:
case 2981:
case 1758:
case 2367:
case 3334:
case 2618:
case 120:
case 3326:
case 668:
case 2665:
case 447:
case 116:
case 2544:
case 1722:
case 1262:
case 1461:
case 2526:
case 1102:
case 837:
case 503:
case 3328:
case 1027:
case 1426:
case 2561:
case 1948:
case 1924:
case 1428:
case 3522:
case 3987:
case 2483:
case 1989:
case 3783:
case 301:
case 2205:
case 1210:
case 2259:
case 649:
case 2116:
case 1963:
case 321:
case 2005:
case 1010:
case 2469:
case 3112:
case 29:
case 1925:
case 2641:
case 693:
case 1823:
case 2664:
case 706:
case 2545:
case 1139:
case 745:
case 3345:
case 481:
case 44:
case 2535:
case 3079:
case 1911:
case 3335:
case 989:
case 642:
case 2631:
case 1303:
case 772:
case 958:
case 694:
case 571:
case 1435:
case 3540:
case 243:
case 64:
case 2340:
case 1864:
case 1476:
case 1188:
case 1649:
case 494:
case 1772:
case 1841:
case 153:
case 2907:
case 3313:
case 1639:
case 493:
case 2164:
case 2392:
case 1831:
case 2204:
case 3137:
case 2513:
case 2280:
case 4008:
case 1097:
case 3530:
case 2888:
case 244:
case 1792:
case 2598:
case 3901:
case 3653:
case 292:
case 3:
case 2141:
case 550:
case 2818:
case 1483:
case 2989:
case 2893:
case 2602:
case 3812:
case 737:
case 1205:
case 266:
case 4053:
case 2569:
case 1116:
case 3369:
case 3033:
case 2873:
case 1059:
case 2010:
case 2975:
case 2865:
case 688:
case 2227:
case 197:
case 2062:
case 186:
case 1356:
case 3021:
case 1693:
case 3467:
case 200:
case 2434:
case 2452:
case 3990:
case 1802:
case 1616:
case 879:
case 3458:
case 1534:
case 1552:
case 488:
case 2756:
case 459:
case 3015:
case 2051:
case 1544:
case 3761:
case 3422:
case 2461:
case 2262:
case 2722:
case 3860:
case 2102:
case 3970:
case 3744:
case 962:
case 3728:
case 1561:
case 3268:
case 2946:
case 2428:
case 2444:
case 3726:
case 1784:
case 4036:
case 1655:
case 1120:
case 1609:
case 3850:
case 3415:
case 3267:
case 2234:
case 1801:
case 3107:
case 883:
case 3022:
case 2947:
case 3500:
case 2028:
case 3894:
case 2026:
case 3256:
case 2384:
case 553:
case 1982:
case 2757:
case 3762:
case 763:
case 240:
case 3067:
case 1617:
case 2052:
case 2034:
case 312:
case 370:
case 3119:
case 3941:
case 2462:
case 3056:
case 1321:
case 2766:
case 2768:
case 2228:
case 4024:
case 884:
case 2937:
case 4048:
case 150:
case 4089:
case 1510:
case 2505:
case 3305:
case 362:
case 3710:
case 31:
case 2953:
case 1333:
case 2809:
case 3811:
case 1405:
case 231:
case 1343:
case 351:
case 4075:
case 3607:
case 3443:
case 3825:
case 265:
case 2817:
case 4063:
case 3923:
case 1269:
case 223:
case 586:
case 1278:
case 3571:
case 178:
case 2887:
case 389:
case 1771:
case 1497:
case 422:
case 204:
case 358:
case 1870:
case 60:
case 3704:
case 3689:
case 1298:
case 3780:
case 3377:
case 2480:
case 2906:
case 1187:
case 1078:
case 1296:
case 203:
case 1854:
case 2404:
case 387:
case 1580:
case 4019:
case 1213:
case 396:
case 2170:
case 3902:
case 1890:
case 2642:
case 40:
case 1245:
case 3195:
case 3479:
case 3003:
case 1035:
case 974:
case 725:
case 3189:
case 602:
case 1379:
case 3163:
case 3514:
case 3203:
case 2690:
case 2314:
case 3175:
case 3499:
case 1385:
case 2785:
case 676:
case 2654:
case 995:
case 1714:
case 746:
case 3485:
case 1399:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759856401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,];
var gg_b = "1759856401/";

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
