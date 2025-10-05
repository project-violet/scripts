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
case 1967:
case 3048:
case 1634:
case 3743:
case 3591:
case 3344:
case 1690:
case 1193:
case 1272:
case 3480:
case 2549:
case 3007:
case 454:
case 1369:
case 549:
case 649:
case 1255:
case 264:
case 856:
case 2874:
case 2142:
case 2482:
case 3035:
case 146:
case 891:
case 631:
case 274:
case 3206:
case 3140:
case 1899:
case 1517:
case 4065:
case 2983:
case 2931:
case 3000:
case 1381:
case 1790:
case 3390:
case 3137:
case 3038:
case 3781:
case 3249:
case 1156:
case 637:
case 2291:
case 1587:
case 897:
case 2913:
case 736:
case 2022:
case 3417:
case 3867:
case 2539:
case 26:
case 2862:
case 2412:
case 3128:
case 263:
case 538:
case 1577:
case 4068:
case 3020:
case 1212:
case 391:
case 974:
case 3226:
case 2392:
case 3671:
case 3769:
case 3130:
case 3397:
case 2814:
case 2464:
case 3633:
case 789:
case 2941:
case 3410:
case 3860:
case 627:
case 527:
case 2544:
case 3672:
case 1837:
case 3290:
case 3856:
case 2687:
case 1211:
case 1167:
case 1763:
case 3096:
case 1706:
case 726:
case 3234:
case 2443:
case 15:
case 936:
case 2942:
case 2879:
case 3682:
case 153:
case 1492:
case 905:
case 2021:
case 3755:
case 84:
case 843:
case 3782:
case 2670:
case 2787:
case 2183:
case 2680:
case 3772:
case 1358:
case 1160:
case 774:
case 1894:
case 1606:
case 2861:
case 2717:
case 2534:
case 3339:
case 3758:
case 3893:
case 3937:
case 1372:
case 3664:
case 763:
case 1808:
case 1269:
case 2433:
case 1649:
case 1382:
case 818:
case 154:
case 3928:
case 1355:
case 3712:
case 1271:
case 3905:
case 1626:
case 4059:
case 844:
case 34:
case 521:
case 1065:
case 2141:
case 1825:
case 2617:
case 3199:
case 1840:
case 3363:
case 2597:
case 1281:
case 3930:
case 2001:
case 446:
case 3764:
case 773:
case 367:
case 3844:
case 1990:
case 3172:
case 1208:
case 3911:
case 2425:
case 1139:
case 4095:
case 1934:
case 294:
case 3579:
case 871:
case 99:
case 1532:
case 2177:
case 2773:
case 131:
case 681:
case 378:
case 2180:
case 748:
case 2683:
case 1106:
case 3943:
case 1399:
case 786:
case 1461:
case 1811:
case 1009:
case 2494:
case 2593:
case 137:
case 3890:
case 867:
case 3164:
case 713:
case 687:
case 1944:
case 868:
case 138:
case 588:
case 293:
case 688:
case 1542:
case 1228:
case 2362:
case 702:
case 929:
case 1205:
case 361:
case 2052:
case 3112:
case 2428:
case 2713:
case 1294:
case 2117:
case 2261:
case 3699:
case 1843:
case 3057:
case 2641:
case 3360:
case 2314:
case 3519:
case 2437:
case 877:
case 739:
case 3584:
case 3740:
case 1513:
case 1134:
case 3725:
case 794:
case 3608:
case 1414:
case 2987:
case 1864:
case 1693:
case 127:
case 3483:
case 3849:
case 1337:
case 1190:
case 200:
case 4009:
case 913:
case 1024:
case 3574:
case 214:
case 2379:
case 55:
case 2262:
case 2970:
case 3826:
case 248:
case 1305:
case 1812:
case 1462:
case 1858:
case 3260:
case 729:
case 247:
case 3003:
case 3708:
case 1098:
case 1793:
case 3066:
case 2214:
case 1872:
case 1308:
case 3169:
case 1144:
case 2910:
case 3794:
case 2567:
case 202:
case 1347:
case 3839:
case 286:
case 241:
case 654:
case 21:
case 1855:
case 2274:
case 3705:
case 900:
case 1095:
case 1474:
case 3023:
case 3171:
case 1926:
case 3605:
case 2732:
case 1756:
case 947:
case 3181:
case 3737:
case 3514:
case 3133:
case 2319:
case 1531:
case 1299:
case 3806:
case 1340:
case 3863:
case 3216:
case 1548:
case 375:
case 3445:
case 3420:
case 180:
case 3152:
case 365:
case 1321:
case 2012:
case 1535:
case 3185:
case 3559:
case 3601:
case 1500:
case 3175:
case 532:
case 2804:
case 3400:
case 3188:
case 1538:
case 3435:
case 3178:
case 1202:
case 2895:
case 2082:
case 3721:
case 2055:
case 3070:
case 2402:
case 685:
case 3621:
case 865:
case 2796:
case 3286:
case 3448:
case 3080:
case 3407:
case 1301:
case 2966:
case 2903:
case 3622:
case 622:
case 312:
case 2069:
case 1616:
case 2401:
case 0:
case 1888:
case 2829:
case 2720:
case 2071:
case 3985:
case 3952:
case 2123:
case 2645:
case 3376:
case 2727:
case 2620:
case 2265:
case 3918:
case 3453:
case 3722:
case 2957:
case 2033:
case 2738:
case 2081:
case 435:
case 2846:
case 3554:
case 3988:
case 2607:
case 3316:
case 1553:
case 2809:
case 2268:
case 1786:
case 2648:
case 2421:
case 3915:
case 945:
case 1776:
case 80:
case 304:
case 310:
case 1676:
case 1221:
case 1852:
case 1092:
case 1885:
case 2748:
case 1818:
case 3457:
case 1351:
case 1089:
case 1436:
case 420:
case 2209:
case 2475:
case 1116:
case 2485:
case 580:
case 3032:
case 130:
case 2127:
case 2723:
case 2005:
case 1252:
case 4014:
case 2623:
case 1821:
case 1409:
case 372:
case 2398:
case 2030:
case 3546:
case 1288:
case 4074:
case 2703:
case 2107:
case 862:
case 1550:
case 2148:
case 3651:
case 132:
case 2304:
case 682:
case 506:
case 3042:
case 4084:
case 422:
case 707:
case 2865:
case 2415:
case 535:
case 370:
case 109:
case 1429:
case 2478:
case 2666:
case 1801:
case 2488:
case 2100:
case 740:
case 2040:
case 1557:
case 872:
case 2025:
case 1388:
case 3775:
case 2204:
case 3718:
case 2757:
case 3922:
case 3752:
case 2295:
case 315:
case 4019:
case 3652:
case 201:
case 525:
case 3685:
case 1495:
case 1566:
case 3675:
case 1503:
case 2657:
case 242:
case 2099:
case 1404:
case 3618:
case 2750:
case 2196:
case 2309:
case 1822:
case 1251:
case 3466:
case 3688:
case 4079:
case 207:
case 120:
case 208:
case 3595:
case 3778:
case 3073:
case 240:
case 2935:
case 1352:
case 1523:
case 2336:
case 2451:
case 1318:
case 3083:
case 3031:
case 2298:
case 2900:
case 1518:
case 3025:
case 972:
case 2751:
case 3040:
case 1159:
case 3488:
case 3100:
case 3603:
case 3135:
case 1724:
case 270:
case 1585:
case 1552:
case 1323:
case 995:
case 3395:
case 2102:
case 3229:
case 2042:
case 3304:
case 1853:
case 3047:
case 1968:
case 3996:
case 3703:
case 3008:
case 3107:
case 3766:
case 2901:
case 3030:
case 3236:
case 272:
case 3094:
case 715:
case 2450:
case 1965:
case 3120:
case 4060:
case 3005:
case 1795:
case 3452:
case 3028:
case 4067:
case 2032:
case 452:
case 1578:
case 1695:
case 2529:
case 3324:
case 1588:
case 1056:
case 3138:
case 1250:
case 1896:
case 1604:
case 262:
case 2457:
case 1959:
case 1646:
case 2788:
case 2031:
case 770:
case 842:
case 3336:
case 655:
case 915:
case 555:
case 2121:
case 3935:
case 1729:
case 2073:
case 4056:
case 2615:
case 3224:
case 1629:
case 2678:
case 2688:
case 1746:
case 1838:
case 307:
case 2403:
case 2466:
case 3948:
case 3196:
case 152:
case 1067:
case 1168:
case 1709:
case 342:
case 3657:
case 795:
case 3859:
case 2675:
case 840:
case 2685:
case 5:
case 3945:
case 2652:
case 2876:
case 3920:
case 808:
case 3329:
case 2524:
case 4093:
case 762:
case 3757:
case 3153:
case 2922:
case 3650:
case 807:
case 3938:
case 3903:
case 2080:
case 2286:
case 1768:
case 3796:
case 1006:
case 2621:
case 1823:
case 3402:
case 2721:
case 975:
case 1476:
case 4044:
case 3895:
case 1924:
case 3082:
case 2435:
case 2178:
case 2077:
case 1129:
case 1754:
case 2188:
case 2087:
case 704:
case 992:
case 1248:
case 1486:
case 1522:
case 3157:
case 3422:
case 2017:
case 2438:
case 3354:
case 1416:
case 3898:
case 2185:
case 1665:
case 2152:
case 3576:
case 1502:
case 3824:
case 4034:
case 2420:
case 712:
case 1765:
case 2445:
case 292:
case 1904:
case 2010:
case 3064:
case 2216:
case 1238:
case 4026:
case 3836:
case 3166:
case 1097:
case 3707:
case 1946:
case 3600:
case 1659:
case 3254:
case 155:
case 1320:
case 1345:
case 3735:
case 2602:
case 903:
case 2978:
case 210:
case 912:
case 552:
case 3648:
case 1850:
case 1296:
case 3809:
case 3700:
case 1338:
case 790:
case 2554:
case 3738:
case 1936:
case 2722:
case 3957:
case 2453:
case 3620:
case 3123:
case 3727:
case 4006:
case 1:
case 2985:
case 4063:
case 3071:
case 904:
case 345:
case 20:
case 3720:
case 203:
case 650:
case 1044:
case 3069:
case 3401:
case 1307:
case 1348:
case 3950:
case 2568:
case 1909:
case 2622:
case 1104:
case 1456:
case 3437:
case 1383:
case 2158:
case 1540:
case 2360:
case 469:
case 1525:
case 3018:
case 2699:
case 3261:
case 2112:
case 3052:
case 3085:
case 978:
case 2971:
case 894:
case 39:
case 184:
case 3405:
case 1191:
case 2969:
case 2256:
case 479:
case 2367:
case 3494:
case 1547:
case 2050:
case 3613:
case 3289:
case 3741:
case 3447:
case 1341:
case 3631:
case 3683:
case 1530:
case 277:
case 3219:
case 3408:
case 1614:
case 3180:
case 1493:
case 1992:
case 3170:
case 2182:
case 633:
case 183:
case 1242:
case 53:
case 3015:
case 1528:
case 457:
case 458:
case 1313:
case 2589:
case 3440:
case 3384:
case 3425:
case 1714:
case 1537:
case 2172:
case 3556:
case 3088:
case 2694:
case 2806:
case 3560:
case 761:
case 3917:
case 3319:
case 1880:
case 759:
case 2737:
case 2181:
case 2133:
case 2605:
case 2171:
case 2912:
case 2728:
case 1779:
case 313:
case 800:
case 3632:
case 158:
case 814:
case 3274:
case 1679:
case 62:
case 2562:
case 3567:
case 771:
case 3284:
case 2839:
case 1761:
case 1991:
case 1887:
case 48:
case 2637:
case 2393:
case 157:
case 2169:
case 1619:
case 2066:
case 1231:
case 347:
case 1467:
case 1817:
case 2143:
case 1599:
case 2260:
case 3742:
case 151:
case 676:
case 666:
case 314:
case 566:
case 2955:
case 2574:
case 841:
case 3642:
case 767:
case 1332:
case 2483:
case 2972:
case 2431:
case 2849:
case 768:
case 1719:
case 2647:
case 1810:
case 3389:
case 3051:
case 2999:
case 3506:
case 3563:
case 711:
case 2410:
case 74:
case 2633:
case 1883:
case 2769:
case 476:
case 2130:
case 3464:
case 373:
case 1873:
case 2671:
case 2105:
case 2045:
case 874:
case 37:
case 2020:
case 998:
case 2771:
case 1426:
case 684:
case 584:
case 134:
case 1179:
case 256:
case 3412:
case 1984:
case 2417:
case 1189:
case 3458:
case 1016:
case 3291:
case 466:
case 2733:
case 2038:
case 1572:
case 2390:
case 2487:
case 1914:
case 3472:
case 3931:
case 1439:
case 1841:
case 2643:
case 2125:
case 1558:
case 2140:
case 2263:
case 374:
case 1512:
case 873:
case 2035:
case 2477:
case 3482:
case 3142:
case 58:
case 13:
case 516:
case 956:
case 616:
case 3874:
case 364:
case 86:
case 583:
case 3002:
case 863:
case 1792:
case 1277:
case 718:
case 2480:
case 297:
case 2007:
case 2108:
case 1564:
case 2591:
case 1287:
case 1813:
case 1406:
case 423:
case 2048:
case 3469:
case 3819:
case 1791:
case 3597:
case 4076:
case 2930:
case 1543:
case 2199:
case 3617:
case 2306:
case 2363:
case 791:
case 419:
case 3141:
case 1961:
case 3710:
case 211:
case 944:
case 305:
case 2612:
case 2592:
case 1370:
case 2905:
case 1174:
case 1842:
case 336:
case 918:
case 1377:
case 3471:
case 3932:
case 123:
case 3481:
case 557:
case 917:
case 43:
case 3590:
case 2664:
case 2053:
case 2758:
case 3717:
case 3534:
case 1317:
case 1533:
case 1114:
case 3131:
case 3787:
case 3183:
case 889:
case 1571:
case 2782:
case 3173:
case 569:
case 943:
case 551:
case 911:
case 244:
case 797:
case 218:
case 124:
case 3879:
case 2655:
case 1162:
case 166:
case 836:
case 1310:
case 3889:
case 2096:
case 2947:
case 2290:
case 2908:
case 3687:
case 2856:
case 1569:
case 3391:
case 1497:
case 2341:
case 3225:
case 2594:
case 1561:
case 3106:
case 3399:
case 3163:
case 751:
case 769:
case 3046:
case 3997:
case 2614:
case 3871:
case 2992:
case 1182:
case 349:
case 3029:
case 3532:
case 838:
case 2242:
case 216:
case 2662:
case 2313:
case 1589:
case 3760:
case 3139:
case 1293:
case 3208:
case 837:
case 1519:
case 2456:
case 1158:
case 1057:
case 3036:
case 1360:
case 3294:
case 1699:
case 831:
case 591:
case 4003:
case 2373:
case 1971:
case 1432:
case 3205:
case 556:
case 656:
case 171:
case 2674:
case 3542:
case 2232:
case 983:
case 757:
case 1164:
case 2191:
case 3944:
case 758:
case 337:
case 3149:
case 3461:
case 1050:
case 1834:
case 1003:
case 461:
case 1708:
case 3197:
case 3330:
case 3098:
case 2619:
case 3793:
case 2231:
case 2467:
case 1640:
case 1143:
case 3858:
case 3906:
case 1747:
case 2599:
case 1260:
case 544:
case 821:
case 644:
case 3812:
case 3462:
case 251:
case 1826:
case 2273:
case 4057:
case 1574:
case 1473:
case 3024:
case 4050:
case 958:
case 2332:
case 618:
case 1483:
case 3337:
case 3190:
case 1849:
case 1431:
case 3414:
case 3864:
case 2810:
case 1267:
case 1584:
case 1740:
case 3939:
case 1694:
case 3299:
case 2661:
case 1958:
case 3340:
case 2241:
case 2789:
case 478:
case 2880:
case 3583:
case 3756:
case 1737:
case 1133:
case 969:
case 3926:
case 2870:
case 1605:
case 543:
case 1171:
case 321:
case 477:
case 1023:
case 2779:
case 3882:
case 3095:
case 996:
case 467:
case 2679:
case 2689:
case 1441:
case 3347:
case 2761:
case 2213:
case 3004:
case 827:
case 2991:
case 3656:
case 1637:
case 257:
case 1393:
case 3949:
case 1730:
case 44:
case 3059:
case 3333:
case 2119:
case 577:
case 2280:
case 677:
case 2841:
case 2086:
case 1643:
case 1125:
case 3734:
case 1140:
case 1206:
case 1263:
case 3960:
case 381:
case 1477:
case 2692:
case 219:
case 2270:
case 2962:
case 23:
case 198:
case 3282:
case 1470:
case 4053:
case 2277:
case 2792:
case 233:
case 888:
case 567:
case 197:
case 1480:
case 2564:
case 3690:
case 3510:
case 2463:
case 1611:
case 724:
case 1239:
case 1048:
case 1147:
case 3634:
case 3258:
case 1860:
case 1410:
case 2217:
case 2161:
case 3744:
case 2449:
case 3580:
case 2831:
case 1769:
case 1130:
case 659:
case 2582:
case 1771:
case 388:
case 234:
case 571:
case 671:
case 417:
case 1128:
case 1867:
case 2210:
case 1334:
case 2189:
case 3264:
case 3644:
case 387:
case 1390:
case 1249:
case 1038:
case 3663:
case 1925:
case 1940:
case 3739:
case 4020:
case 2533:
case 2919:
case 719:
case 491:
case 1782:
case 3805:
case 1326:
case 3312:
case 1755:
case 144:
case 923:
case 118:
case 1682:
case 224:
case 92:
case 2162:
case 266:
case 3639:
case 1234:
case 3763:
case 1349:
case 1856:
case 1908:
case 3364:
case 1672:
case 2791:
case 1764:
case 2444:
case 3281:
case 3233:
case 1930:
case 1306:
case 1199:
case 3840:
case 1363:
case 3825:
case 4035:
case 1994:
case 111:
case 976:
case 14:
case 2370:
case 3271:
case 1905:
case 3626:
case 999:
case 22:
case 924:
case 1712:
case 2979:
case 4007:
case 497:
case 2377:
case 3726:
case 2387:
case 1893:
case 1937:
case 3372:
case 1664:
case 2511:
case 1053:
case 3847:
case 1339:
case 498:
case 734:
case 2989:
case 2366:
case 1546:
case 4073:
case 2257:
case 3409:
case 2704:
case 1450:
case 195:
case 3252:
case 2795:
case 575:
case 2578:
case 2695:
case 330:
case 1529:
case 750:
case 2588:
case 2056:
case 2250:
case 2896:
case 1457:
case 3351:
case 162:
case 692:
case 1536:
case 415:
case 2954:
case 3801:
case 3019:
case 3429:
case 4041:
case 2724:
case 170:
case 2585:
case 2552:
case 385:
case 2323:
case 3176:
case 590:
case 4013:
case 830:
case 3278:
case 3215:
case 1042:
case 752:
case 2853:
case 332:
case 1651:
case 2798:
case 2093:
case 3288:
case 1618:
case 470:
case 3566:
case 1598:
case 3495:
case 1685:
case 2835:
case 1652:
case 3802:
case 503:
case 50:
case 60:
case 1752:
case 3084:
case 2736:
case 2551:
case 512:
case 1013:
case 1718:
case 1775:
case 4042:
case 2266:
case 3014:
case 2959:
case 2203:
case 495:
case 3375:
case 2646:
case 1083:
case 1788:
case 3986:
case 2060:
case 1715:
case 3523:
case 3976:
case 2820:
case 2845:
case 1121:
case 3385:
case 3062:
case 2827:
case 504:
case 604:
case 1595:
case 510:
case 462:
case 320:
case 1902:
case 2746:
case 3498:
case 1466:
case 3251:
case 1504:
case 822:
case 2350:
case 2067:
case 2136:
case 572:
case 2416:
case 3500:
case 2026:
case 3535:
case 695:
case 2245:
case 165:
case 1427:
case 1152:
case 2665:
case 2220:
case 2995:
case 806:
case 2227:
case 1445:
case 2396:
case 562:
case 192:
case 1216:
case 2049:
case 2654:
case 2146:
case 755:
case 1448:
case 2006:
case 1621:
case 335:
case 1276:
case 670:
case 570:
case 2235:
case 1070:
case 1721:
case 2924:
case 880:
case 660:
case 412:
case 1178:
case 3202:
case 2129:
case 560:
case 3538:
case 40:
case 2668:
case 2039:
case 2486:
case 382:
case 403:
case 3716:
case 1975:
case 1554:
case 4070:
case 1918:
case 1453:
case 4080:
case 955:
case 2521:
case 325:
case 1376:
case 1985:
case 3815:
case 103:
case 3888:
case 2307:
case 3616:
case 2909:
case 3818:
case 3686:
case 2198:
case 2946:
case 465:
case 2501:
case 4017:
case 9:
case 3092:
case 3885:
case 3852:
case 255:
case 2345:
case 825:
case 3221:
case 1978:
case 2929:
case 1915:
case 3786:
case 475:
case 2090:
case 2759:
case 1988:
case 3248:
case 282:
case 1696:
case 3668:
case 1516:
case 2538:
case 1072:
case 1895:
case 3924:
case 4069:
case 2545:
case 1365:
case 235:
case 3823:
case 1796:
case 2301:
case 1966:
case 3654:
case 2507:
case 982:
case 1150:
case 3396:
case 1368:
case 3227:
case 906:
case 3502:
case 280:
case 3665:
case 1576:
case 1923:
case 3220:
case 1012:
case 935:
case 2321:
case 2535:
case 4043:
case 3026:
case 3866:
case 1898:
case 3803:
case 1354:
case 1586:
case 725:
case 3136:
case 1753:
case 1058:
case 1157:
case 507:
case 607:
case 1700:
case 3090:
case 3759:
case 3850:
case 2553:
case 3296:
case 3034:
case 2786:
case 1648:
case 782:
case 1421:
case 608:
case 3929:
case 1735:
case 2676:
case 355:
case 3320:
case 640:
case 4058:
case 2092:
case 540:
case 2885:
case 4012:
case 1600:
case 3659:
case 3501:
case 1166:
case 1707:
case 1836:
case 1043:
case 2818:
case 2468:
case 735:
case 4082:
case 3253:
case 3909:
case 1069:
case 2616:
case 3307:
case 780:
case 2888:
case 2815:
case 2465:
case 1745:
case 1071:
case 3335:
case 3:
case 501:
case 1645:
case 601:
case 1123:
case 855:
case 3521:
case 3936:
case 642:
case 1033:
case 1081:
case 1846:
case 3300:
case 2716:
case 720:
case 2446:
case 2288:
case 1107:
case 3798:
case 1766:
case 3853:
case 3968:
case 232:
case 1395:
case 930:
case 3552:
case 2176:
case 209:
case 1478:
case 442:
case 1135:
case 3575:
case 1603:
case 2801:
case 1666:
case 2019:
case 3698:
case 3159:
case 1488:
case 1246:
case 1040:
case 2557:
case 3518:
case 2186:
case 2089:
case 408:
case 1209:
case 1868:
case 1138:
case 3588:
case 407:
case 1028:
case 3795:
case 1145:
case 3965:
case 2821:
case 2218:
case 2061:
case 3257:
case 1398:
case 2275:
case 1948:
case 352:
case 3067:
case 2251:
case 3838:
case 4028:
case 220:
case 1224:
case 3629:
case 850:
case 732:
case 3827:
case 2062:
case 2385:
case 140:
case 2523:
case 2976:
case 3060:
case 3357:
case 2318:
case 785:
case 4005:
case 3646:
case 2375:
case 3203:
case 2388:
case 3609:
case 3551:
case 1204:
case 852:
case 1650:
case 1757:
case 3848:
case 1153:
case 3736:
case 2084:
case 545:
case 1927:
case 4008:
case 1295:
case 920:
case 4047:
case 3223:
case 3165:
case 4025:
case 4040:
case 1859:
case 3800:
case 1657:
case 3636:
case 3709:
case 1750:
case 3572:
case 2264:
case 1291:
case 3210:
case 3984:
case 1539:
case 69:
case 1412:
case 3555:
case 3974:
case 163:
case 3582:
case 693:
case 1132:
case 2577:
case 946:
case 2212:
case 819:
case 173:
case 1464:
case 1814:
case 2580:
case 3883:
case 1941:
case 3217:
case 1506:
case 1884:
case 75:
case 2510:
case 3813:
case 3463:
case 3406:
case 753:
case 987:
case 436:
case 988:
case 3792:
case 333:
case 834:
case 694:
case 1874:
case 164:
case 594:
case 1142:
case 3962:
case 126:
case 1526:
case 2371:
case 529:
case 2899:
case 489:
case 3439:
case 2517:
case 3119:
case 2697:
case 1983:
case 1472:
case 3280:
case 1931:
case 3914:
case 2333:
case 2059:
case 1717:
case 1113:
case 1534:
case 3184:
case 4002:
case 1610:
case 2372:
case 1590:
case 426:
case 2808:
case 3691:
case 464:
case 2649:
case 953:
case 2382:
case 3377:
case 323:
case 1932:
case 2726:
case 61:
case 866:
case 254:
case 3842:
case 32:
case 2355:
case 641:
case 639:
case 899:
case 2271:
case 2626:
case 189:
case 3370:
case 105:
case 2825:
case 1710:
case 1617:
case 3444:
case 2749:
case 2281:
case 1597:
case 2233:
case 1469:
case 1001:
case 3791:
case 2364:
case 1391:
case 1780:
case 46:
case 1687:
case 3569:
case 2706:
case 1889:
case 463:
case 1443:
case 614:
case 366:
case 25:
case 954:
case 514:
case 1879:
case 3162:
case 1770:
case 3832:
case 253:
case 1677:
case 2312:
case 1292:
case 1777:
case 648:
case 3571:
case 2054:
case 1787:
case 1183:
case 2830:
case 3114:
case 647:
case 2358:
case 2739:
case 781:
case 3434:
case 746:
case 2160:
case 2894:
case 1110:
case 1613:
case 400:
case 2149:
case 414:
case 3191:
case 883:
case 1405:
case 3232:
case 1362:
case 19:
case 816:
case 66:
case 573:
case 1085:
case 2126:
case 57:
case 1052:
case 67:
case 1428:
case 447:
case 2294:
case 1713:
case 1261:
case 3540:
case 721:
case 2036:
case 3784:
case 448:
case 1075:
case 1088:
case 937:
case 41:
case 2990:
case 441:
case 2208:
case 2419:
case 1556:
case 2139:
case 2247:
case 2934:
case 1440:
case 2667:
case 884:
case 3662:
case 3242:
case 1015:
case 2029:
case 1177:
case 1078:
case 727:
case 249:
case 231:
case 3992:
case 1673:
case 1219:
case 3614:
case 1180:
case 1631:
case 3530:
case 2881:
case 2833:
case 2240:
case 2660:
case 3341:
case 2225:
case 738:
case 2949:
case 2872:
case 4015:
case 2656:
case 3761:
case 3213:
case 2004:
case 1567:
case 3689:
case 1284:
case 2347:
case 3342:
case 141:
case 11:
case 536:
case 1632:
case 879:
case 358:
case 2095:
case 928:
case 851:
case 2474:
case 3779:
case 689:
case 2573:
case 869:
case 2756:
case 3880:
case 2531:
case 2484:
case 1917:
case 3661:
case 2299:
case 429:
case 1560:
case 493:
case 2939:
case 3810:
case 2134:
case 1051:
case 2864:
case 2693:
case 49:
case 227:
case 858:
case 2024:
case 1642:
case 1379:
case 3273:
case 3192:
case 4018:
case 2305:
case 2462:
case 351:
case 921:
case 3599:
case 731:
case 4085:
case 2541:
case 3467:
case 3817:
case 3283:
case 3619:
case 2793:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759633201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,];
var gg_b = "1759633201/";

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
