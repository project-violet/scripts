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
case 3309:
case 3556:
case 211:
case 3988:
case 3898:
case 2032:
case 77:
case 36:
case 2360:
case 1714:
case 1500:
case 2713:
case 191:
case 2010:
case 2501:
case 1665:
case 1361:
case 1479:
case 3278:
case 1231:
case 357:
case 2777:
case 843:
case 3960:
case 2388:
case 604:
case 489:
case 2803:
case 686:
case 3691:
case 3735:
case 954:
case 1734:
case 1394:
case 2908:
case 1546:
case 193:
case 2389:
case 2733:
case 430:
case 2362:
case 1502:
case 2247:
case 1687:
case 3027:
case 2296:
case 474:
case 1195:
case 285:
case 2766:
case 2457:
case 3883:
case 3308:
case 841:
case 2191:
case 2727:
case 638:
case 527:
case 3712:
case 1583:
case 1599:
case 2584:
case 3228:
case 773:
case 1429:
case 2215:
case 1116:
case 363:
case 946:
case 3390:
case 2459:
case 3213:
case 1881:
case 2778:
case 4004:
case 2990:
case 1689:
case 1693:
case 3277:
case 2249:
case 1662:
case 3316:
case 1433:
case 672:
case 3846:
case 3710:
case 3504:
case 3013:
case 19:
case 3233:
case 2015:
case 3363:
case 2248:
case 3732:
case 1477:
case 3028:
case 507:
case 254:
case 3747:
case 2779:
case 187:
case 2164:
case 1413:
case 3800:
case 3336:
case 1163:
case 574:
case 2869:
case 3307:
case 176:
case 3229:
case 1192:
case 2963:
case 1598:
case 780:
case 1964:
case 1742:
case 2180:
case 3508:
case 3750:
case 320:
case 1737:
case 365:
case 3024:
case 3381:
case 1684:
case 3685:
case 1243:
case 4009:
case 1890:
case 3676:
case 2418:
case 2891:
case 1453:
case 1302:
case 2981:
case 3197:
case 450:
case 981:
case 2593:
case 2589:
case 3425:
case 1181:
case 1270:
case 1346:
case 1816:
case 3595:
case 1594:
case 934:
case 1968:
case 228:
case 566:
case 1043:
case 2956:
case 2126:
case 2044:
case 300:
case 9:
case 747:
case 710:
case 337:
case 2419:
case 3253:
case 1892:
case 1717:
case 992:
case 1156:
case 2255:
case 4095:
case 2605:
case 838:
case 3901:
case 2698:
case 2774:
case 2445:
case 1070:
case 1836:
case 1272:
case 2741:
case 117:
case 3356:
case 3509:
case 1807:
case 2438:
case 3771:
case 1398:
case 908:
case 4090:
case 2600:
case 1441:
case 1809:
case 2250:
case 270:
case 3507:
case 2103:
case 2052:
case 3744:
case 419:
case 2473:
case 3536:
case 3669:
case 1220:
case 3475:
case 1474:
case 550:
case 3422:
case 3486:
case 2221:
case 4016:
case 2167:
case 845:
case 1967:
case 1075:
case 3074:
case 1251:
case 3304:
case 1305:
case 2440:
case 1601:
case 3680:
case 2587:
case 3451:
case 1020:
case 3894:
case 2:
case 1985:
case 4092:
case 215:
case 3984:
case 2602:
case 1718:
case 466:
case 1286:
case 2185:
case 1222:
case 768:
case 3199:
case 804:
case 928:
case 3755:
case 1754:
case 2406:
case 3668:
case 2697:
case 2021:
case 997:
case 759:
case 2384:
case 283:
case 4036:
case 2442:
case 1383:
case 1976:
case 1739:
case 742:
case 253:
case 3737:
case 1102:
case 165:
case 699:
case 1472:
case 496:
case 120:
case 1750:
case 2368:
case 789:
case 1508:
case 2054:
case 3742:
case 2238:
case 798:
case 3890:
case 2023:
case 262:
case 3684:
case 1146:
case 95:
case 3302:
case 1721:
case 1197:
case 2455:
case 573:
case 539:
case 248:
case 2751:
case 3594:
case 3816:
case 3181:
case 1425:
case 3424:
case 3346:
case 2887:
case 1752:
case 2223:
case 3740:
case 3969:
case 2722:
case 774:
case 3892:
case 2218:
case 0:
case 1253:
case 3926:
case 3070:
case 1667:
case 60:
case 2444:
case 3300:
case 1443:
case 1901:
case 2775:
case 1356:
case 571:
case 317:
case 340:
case 935:
case 730:
case 25:
case 1507:
case 2237:
case 3903:
case 1771:
case 3738:
case 2905:
case 2017:
case 1682:
case 722:
case 3022:
case 3104:
case 1105:
case 1475:
case 2656:
case 194:
case 1536:
case 596:
case 2040:
case 805:
case 953:
case 3745:
case 1592:
case 1422:
case 1198:
case 1304:
case 2998:
case 2564:
case 3075:
case 3251:
case 2452:
case 439:
case 473:
case 2725:
case 3985:
case 1516:
case 825:
case 860:
case 3895:
case 178:
case 951:
case 1451:
case 2240:
case 2983:
case 2999:
case 1680:
case 2217:
case 2042:
case 312:
case 1199:
case 1183:
case 3286:
case 395:
case 2184:
case 2421:
case 2037:
case 235:
case 2273:
case 603:
case 621:
case 3051:
case 1274:
case 844:
case 132:
case 3739:
case 2681:
case 2772:
case 3808:
case 1898:
case 750:
case 955:
case 1988:
case 803:
case 2569:
case 1556:
case 1161:
case 1079:
case 2582:
case 1715:
case 3714:
case 2257:
case 3500:
case 2607:
case 16:
case 625:
case 206:
case 2663:
case 475:
case 1960:
case 284:
case 3011:
case 3109:
case 1278:
case 231:
case 1664:
case 3361:
case 2410:
case 1805:
case 2057:
case 1691:
case 3734:
case 3394:
case 2580:
case 3108:
case 3687:
case 1748:
case 542:
case 823:
case 2189:
case 2193:
case 93:
case 1962:
case 1581:
case 1194:
case 3031:
case 1078:
case 1308:
case 382:
case 1993:
case 568:
case 279:
case 3597:
case 1899:
case 233:
case 1228:
case 80:
case 1897:
case 152:
case 2034:
case 3881:
case 2608:
case 1730:
case 1390:
case 163:
case 309:
case 1029:
case 618:
case 2731:
case 2695:
case 575:
case 2435:
case 931:
case 2059:
case 984:
case 3433:
case 3190:
case 3662:
case 1316:
case 656:
case 442:
case 1013:
case 2364:
case 1504:
case 1747:
case 2801:
case 1028:
case 3107:
case 82:
case 3477:
case 1392:
case 899:
case 766:
case 933:
case 888:
case 926:
case 1336:
case 3413:
case 510:
case 1965:
case 3964:
case 3660:
case 2711:
case 3428:
case 1307:
case 376:
case 3192:
case 23:
case 4052:
case 3521:
case 2292:
case 3854:
case 3818:
case 3491:
case 3631:
case 1487:
case 3795:
case 1794:
case 1334:
case 2825:
case 3823:
case 2090:
case 470:
case 2793:
case 2333:
case 12:
case 2329:
case 1148:
case 2935:
case 1091:
case 434:
case 3134:
case 861:
case 1135:
case 1627:
case 1359:
case 755:
case 481:
case 2016:
case 2290:
case 528:
case 2063:
case 3611:
case 2843:
case 1314:
case 2760:
case 3315:
case 1844:
case 1358:
case 2313:
case 2574:
case 3065:
case 1064:
case 3709:
case 34:
case 1149:
case 2328:
case 2541:
case 415:
case 2788:
case 3928:
case 4021:
case 2216:
case 3114:
case 1115:
case 3158:
case 1540:
case 2870:
case 483:
case 2036:
case 3464:
case 3287:
case 1761:
case 3913:
case 1291:
case 2377:
case 58:
case 2915:
case 3792:
case 3817:
case 706:
case 1519:
case 3332:
case 408:
case 2461:
case 694:
case 570:
case 1852:
case 3060:
case 1488:
case 3293:
case 3840:
case 919:
case 136:
case 123:
case 2614:
case 2658:
case 3571:
case 101:
case 581:
case 3873:
case 2932:
case 3544:
case 1545:
case 2875:
case 3088:
case 3260:
case 3093:
case 3790:
case 1629:
case 592:
case 3330:
case 4071:
case 3978:
case 1931:
case 515:
case 2095:
case 2209:
case 1850:
case 678:
case 1666:
case 2659:
case 3842:
case 3062:
case 733:
case 966:
case 779:
case 3157:
case 3716:
case 1493:
case 2851:
case 3288:
case 2787:
case 358:
case 48:
case 2912:
case 1523:
case 2378:
case 2634:
case 3555:
case 1554:
case 583:
case 497:
case 1633:
case 103:
case 2553:
case 1067:
case 1847:
case 66:
case 377:
case 1832:
case 144:
case 1317:
case 546:
case 4035:
case 2701:
case 3974:
case 2175:
case 2405:
case 1340:
case 1276:
case 1810:
case 4048:
case 3403:
case 2619:
case 927:
case 1285:
case 2341:
case 2186:
case 3467:
case 2952:
case 3117:
case 3756:
case 2498:
case 714:
case 3643:
case 2122:
case 2004:
case 2374:
case 3140:
case 2638:
case 1558:
case 3515:
case 1373:
case 1986:
case 1514:
case 657:
case 160:
case 1152:
case 41:
case 930:
case 735:
case 3672:
case 345:
case 3781:
case 1306:
case 3857:
case 1076:
case 2151:
case 2483:
case 513:
case 2499:
case 4015:
case 1812:
case 105:
case 1653:
case 2533:
case 2618:
case 4049:
case 3106:
case 2120:
case 974:
case 1534:
case 202:
case 3142:
case 324:
case 3548:
case 1085:
case 2831:
case 3321:
case 1702:
case 3137:
case 227:
case 663:
case 2172:
case 2402:
case 3480:
case 3139:
case 1068:
case 1354:
case 4010:
case 3651:
case 2578:
case 652:
case 338:
case 446:
case 1835:
case 2446:
case 649:
case 837:
case 753:
case 3924:
case 2784:
case 3512:
case 2606:
case 3620:
case 298:
case 372:
case 2527:
case 3468:
case 2256:
case 762:
case 3123:
case 2955:
case 2125:
case 1641:
case 3426:
case 2400:
case 1345:
case 2281:
case 3858:
case 3596:
case 1815:
case 3469:
case 51:
case 1268:
case 1798:
case 3675:
case 3371:
case 207:
case 1970:
case 3119:
case 230:
case 3145:
case 390:
case 1082:
case 2617:
case 3510:
case 902:
case 1705:
case 274:
case 2579:
case 1849:
case 1943:
case 1280:
case 1171:
case 1069:
case 865:
case 2944:
case 3532:
case 1319:
case 820:
case 734:
case 3975:
case 2322:
case 344:
case 691:
case 2098:
case 3317:
case 2879:
case 3847:
case 177:
case 1549:
case 455:
case 1670:
case 2386:
case 781:
case 2973:
case 1352:
case 1173:
case 2174:
case 3276:
case 506:
case 104:
case 1643:
case 2769:
case 4059:
case 186:
case 812:
case 1756:
case 1284:
case 770:
case 975:
case 2644:
case 3896:
case 3152:
case 360:
case 1515:
case 3514:
case 2726:
case 3700:
case 2782:
case 2375:
case 2671:
case 1140:
case 3076:
case 3306:
case 2320:
case 145:
case 259:
case 1485:
case 3121:
case 3484:
case 693:
case 2827:
case 4014:
case 1350:
case 242:
case 2768:
case 4058:
case 2298:
case 3342:
case 2655:
case 1106:
case 2205:
case 792:
case 3746:
case 2937:
case 3203:
case 3653:
case 305:
case 910:
case 715:
case 947:
case 7:
case 1321:
case 3624:
case 3702:
case 1625:
case 1137:
case 1548:
case 3150:
case 2878:
case 1084:
case 526:
case 2780:
case 3920:
case 579:
case 1142:
case 1355:
case 1201:
case 3068:
case 3318:
case 2097:
case 840:
case 2621:
case 3972:
case 2325:
case 3835:
case 2833:
case 138:
case 555:
case 172:
case 3269:
case 3155:
case 3080:
case 1468:
case 3339:
case 1512:
case 3783:
case 1620:
case 3799:
case 1924:
case 2372:
case 2002:
case 2153:
case 3557:
case 275:
case 2124:
case 406:
case 2866:
case 1530:
case 609:
case 2650:
case 2046:
case 1953:
case 1123:
case 1482:
case 2343:
case 687:
case 2813:
case 3641:
case 1858:
case 69:
case 2297:
case 3970:
case 2511:
case 3674:
case 1675:
case 1371:
case 78:
case 2828:
case 2938:
case 3705:
case 1704:
case 2000:
case 3026:
case 2246:
case 2370:
case 1686:
case 629:
case 479:
case 3144:
case 2652:
case 210:
case 247:
case 3943:
case 3401:
case 3171:
case 1547:
case 53:
case 2877:
case 3849:
case 2959:
case 553:
case 4040:
case 1818:
case 3855:
case 1854:
case 1521:
case 388:
case 562:
case 2416:
case 1823:
case 4017:
case 2166:
case 1159:
case 1795:
case 3678:
case 3794:
case 2551:
case 3334:
case 1335:
case 1708:
case 1933:
case 1550:
case 3148:
case 2630:
case 4073:
case 273:
case 3537:
case 1839:
case 3359:
case 3506:
case 3627:
case 4042:
case 3358:
case 2575:
case 1315:
case 3573:
case 4037:
case 1838:
case 3871:
case 14:
case 3149:
case 2407:
case 664:
case 2696:
case 280:
case 1287:
case 1158:
case 3465:
case 1464:
case 3115:
case 617:
case 2632:
case 2914:
case 30:
case 435:
case 1819:
case 2522:
case 3761:
case 2958:
case 2610:
case 141:
case 4023:
case 1347:
case 1792:
case 116:
case 1332:
case 3519:
case 1840:
case 1763:
case 3911:
case 1293:
case 2294:
case 3852:
case 3196:
case 1310:
case 2764:
case 2409:
case 3147:
case 2179:
case 711:
case 3538:
case 2841:
case 3613:
case 323:
case 2615:
case 336:
case 3132:
case 1544:
case 973:
case 893:
case 3460:
case 939:
case 567:
case 1396:
case 3110:
case 2094:
case 785:
case 4038:
case 451:
case 1978:
case 3931:
case 3629:
case 1330:
case 1806:
case 169:
case 1062:
case 4045:
case 143:
case 3666:
case 2178:
case 3850:
case 2408:
case 3523:
case 158:
case 891:
case 1288:
case 3489:
case 2648:
case 2525:
case 3518:
case 3633:
case 2957:
case 3462:
case 321:
case 2331:
case 2791:
case 2635:
case 2330:
case 94:
case 269:
case 2089:
case 3095:
case 2978:
case 3659:
case 3327:
case 2062:
case 615:
case 243:
case 1648:
case 3851:
case 2716:
case 1525:
case 3912:
case 258:
case 3787:
case 2927:
case 1635:
case 1127:
case 2555:
case 3634:
case 1331:
case 3378:
case 3553:
case 3930:
case 3822:
case 3111:
case 4024:
case 2792:
case 3379:
case 3996:
case 3886:
case 3461:
case 3295:
case 4053:
case 1570:
case 2293:
case 1649:
case 670:
case 420:
case 813:
case 2707:
case 350:
case 1061:
case 3658:
case 3910:
case 2979:
case 2736:
case 2088:
case 3932:
case 2315:
case 2611:
case 3949:
case 2977:
case 366:
case 1436:
case 3313:
case 2845:
case 180:
case 478:
case 537:
case 3092:
case 2838:
case 776:
case 1407:
case 1463:
case 79:
case 2114:
case 3788:
case 68:
case 2287:
case 3036:
case 2819:
case 171:
case 958:
case 787:
case 2913:
case 3377:
case 697:
case 2854:
case 2521:
case 319:
case 3762:
case 1959:
case 565:
case 520:
case 494:
case 1853:
case 2491:
case 1824:
case 2335:
case 941:
case 2795:
case 2929:
case 3789:
case 3263:
case 3090:
case 2823:
case 1630:
case 3329:
case 139:
case 3657:
case 173:
case 3872:
case 4074:
case 2708:
case 854:
case 1612:
case 2087:
case 2134:
case 3016:
case 4041:
case 1133:
case 1919:
case 2344:
case 2426:
case 3170:
case 1343:
case 2814:
case 2596:
case 2675:
case 1456:
case 2001:
case 2469:
case 330:
case 3673:
case 307:
case 1703:
case 2686:
case 3143:
case 808:
case 1938:
case 3971:
case 764:
case 924:
case 3640:
case 2547:
case 3579:
case 147:
case 110:
case 327:
case 1097:
case 552:
case 3578:
case 88:
case 549:
case 238:
case 1833:
case 1776:
case 1939:
case 1325:
case 3446:
case 897:
case 3081:
case 3784:
case 2924:
case 1785:
case 1002:
case 1153:
case 3256:
case 272:
case 2154:
case 398:
case 2620:
case 1923:
case 389:
case 2512:
case 3955:
case 986:
case 828:
case 904:
case 3642:
case 2123:
case 3125:
case 3637:
case 1866:
case 1200:
case 175:
case 1918:
case 1650:
case 2781:
case 245:
case 3566:
case 1320:
case 3639:
case 1768:
case 4013:
case 461:
case 142:
case 3499:
case 1298:
case 159:
case 2350:
case 4077:
case 1937:
case 3618:
case 3950:
case 1351:
case 1942:
case 168:
case 224:
case 2142:
case 302:
case 2137:
case 2321:
case 870:
case 1878:
case 3831:
case 2548:
case 3577:
case 2549:
case 2670:
case 4033:
case 463:
case 1141:
case 1322:
case 883:
case 938:
case 1098:
case 3175:
case 611:
case 2352:
case 646:
case 3619:
case 2403:
case 2467:
case 3952:
case 3528:
case 1644:
case 3186:
case 3341:
case 3122:
case 3811:
case 1299:
case 3498:
case 1283:
case 1940:
case 4066:
case 557:
case 286:
case 1769:
case 2140:
case 1375:
case 3513:
case 3374:
case 1005:
case 1917:
case 972:
case 4029:
case 815:
case 848:
case 59:
case 2345:
case 3813:
case 2641:
case 1170:
case 493:
case 587:
case 256:
case 3767:
case 3456:
case 3828:
case 2798:
case 1617:
case 2082:
case 4031:
case 2705:
case 3938:
case 2144:
case 3703:
case 3370:
case 3246:
case 2026:
case 482:
case 63:
case 3000:
case 853:
case 700:
case 905:
case 174:
case 1579:
case 1640:
case 2171:
case 529:
case 1056:
case 2943:
case 491:
case 2354:
case 2318:
case 1402:
case 1172:
case 655:
case 1081:
case 2835:
case 3325:
case 1324:
case 3621:
case 1446:
case 3939:
case 944:
case 3923:
case 2783:
case 189:
case 2339:
case 3829:
case 2080:
case 1527:
case 765:
case 960:
case 3153:
case 3002:
case 925:
case 1784:
case 3785:
case 4011:
case 3481:
case 1125:
case 3200:
case 2557:
case 1642:
case 2282:
case 3954:
case 1955:
case 1566:
case 593:
case 2306:
case 1639:
case 1151:
case 2076:
case 2830:
case 487:
case 956:
case 867:
case 1921:
case 1529:
case 2267:
case 2484:
case 2121:
case 359:
case 2342:
case 1483:
case 732:
case 2951:
case 778:
case 1120:
case 1204:
case 3205:
case 3942:
case 3351:
case 1654:
case 626:
case 2203:
case 679:
case 3937:
case 3878:
case 2150:
case 85:
case 2624:
case 2702:
case 3906:
case 2920:
case 3780:
case 814:
case 368:
case 3099:
case 2317:
case 1701:
case 3973:
case 3386:
case 3141:
case 2067:
case 1577:
case 3879:
case 2847:
case 835:
case 3404:
case 1405:
case 2340:
case 3174:
case 918:
case 3769:
case 122:
case 3299:
case 3940:
case 3283:
case 1645:
case 1186:
case 1341:
case 225:
case 2700:
case 3726:
case 2514:
case 2373:
case 684:
case 2003:
case 2896:
case 1004:
case 631:
case 3917:
case 3005:
case 2558:
case 794:
case 3671:
case 1638:
case 3375:
case 3782:
case 3094:
case 1095:
case 1820:
case 806:
case 884:
case 1327:
case 1209:
case 1131:
case 4043:
case 2539:
case 1659:
case 1494:
case 1787:
case 3525:
case 2130:
case 2493:
case 1851:
case 1553:
case 2518:
case 1930:
case 3127:
case 3635:
case 1634:
case 1378:
case 1009:
case 1379:
case 1996:
case 2519:
case 826:
case 4025:
case 988:
case 833:
case 757:
case 879:
case 1111:
case 65:
case 396:
case 3649:
case 2677:
case 2911:
case 3764:
case 1765:
case 2196:
case 1295:
case 2613:
case 201:
case 3841:
case 2538:
case 1658:
case 1208:
case 236:
case 37:
case 3311:
case 223:
case 4072:
case 2628:
case 92:
case 1932:
case 3874:
case 3543:
case 1947:
case 2358:
case 651:
case 412:
case 2064:
case 564:
case 1949:
case 166:
case 1290:
case 2314:
case 495:
case 2149:
case 1092:
case 380:
case 4020:
case 1036:
case 3113:
case 761:
case 921:
case 903:
case 2115:
case 855:
case 3463:
case 1216:
case 1377:
case 3492:
case 20:
case 3586:
case 540:
case 2291:
case 371:
case 2517:
case 3853:
case 119:
case 1762:
case 1292:
case 4086:
case 2334:
case 2794:
case 2678:
case 1825:
case 648:
case 1935:
case 752:
case 339:
case 2537:
case 3630:
case 2148:
case 22:
case 1329:
case 1016:
case 3133:
case 3490:
case 1948:
case 2135:
case 1236:
case 3612:
case 901:
case 1366:
case 3520:
case 2013:
case 1058:
case 3365:
case 1364:
case 2710:
case 1503:
case 607:
case 2363:
case 630:
case 3015:
case 1801:
case 2392:
case 70:
case 2732:
case 3248:
case 354:
case 2747:
case 590:
case 424:
case 1609:
case 2336:
case 2266:
case 3458:
case 2800:
case 3826:
case 1165:
case 1259:
case 3164:
case 3882:
case 1415:
case 3992:
case 3049:
case 2077:
case 1567:
case 3869:
case 2965:
case 2712:
case 252:
case 3868:
case 96:
case 2228:
case 72:
case 3584:
case 3916:
case 1585:
case 2390:
case 538:
case 2033:
case 1258:
case 3035:
case 3459:
case 1187:
case 1608:
case 3778:
case 1731:
case 2277:
case 572:
case 1448:
case 3990:
case 3880:
case 799:
case 957:
case 866:
case 788:
case 2316:
case 404:
case 1059:
case 698:
case 2066:
case 3210:
case 2395:
case 2691:
case 3733:
case 1057:
case 3030:
case 313:
case 721:
case 2027:
case 2431:
case 2279:
case 3247:
case 385:
case 2194:
case 3296:
case 1430:
case 2581:
case 3457:
case 2962:
case 2989:
case 1690:
case 126:
case 1162:
case 2883:
case 179:
case 2078:
case 1884:
case 1412:
case 3885:
case 1568:
case 2308:
case 2556:
case 2309:
case 1636:
case 701:
case 438:
case 2227:
case 3047:
case 2161:
case 3212:
case 963:
case 2411:
case 3032:
case 736:
case 2898:
case 723:
case 1526:
case 949:
case 2715:
case 26:
case 3230:
case 1496:
case 952:
case 1961:
case 1582:
case 131:
case 2960:
case 504:
case 106:
case 586:
case 2749:
case 2805:
case 1692:
case 3388:
case 472:
case 3909:
case 1410:
case 1889:
case 2451:
case 1893:
case 278:
case 392:
case 1999:
case 569:
case 1240:
case 1376:
case 3602:
case 2516:
case 2984:
case 315:
case 900:
case 44:
case 937:
case 1421:
case 3185:
case 3050:
case 3753:
case 1591:
case 1042:
case 822:
case 1217:
case 1862:
case 2183:
case 3406:
case 3697:
case 558:
case 1385:
case 1772:
case 2241:
case 1681:
case 1450:
case 383:
case 1905:
case 2771:
case 1242:
case 370:
case 1367:
case 541:
case 2626:
case 920:
case 760:
case 3052:
case 3103:
case 2105:
case 2669:
case 1656:
case 4087:
case 2422:
case 3417:
case 3167:
case 2592:
case 381:
case 2041:
case 1452:
case 1073:
case 167:
case 650:
case 2563:
case 1770:
case 1303:
case 3565:
case 1998:
case 3440:
case 2304:
case 2074:
case 1223:
case 3956:
case 328:
case 1045:
case 4062:
case 2752:
case 3588:
case 443:
case 2224:
case 2100:
case 2253:
case 237:
case 1218:
case 1900:
case 469:
case 1786:
case 3301:
case 3605:
case 889:
case 1722:
case 1604:
case 3071:
case 898:
case 151:
case 978:
case 3698:
case 1775:
case 2443:
case 932:
case 1326:
case 3560:
case 827:
case 3741:
case 1239:
case 3438:
case 1471:
case 458:
case 2509:
case 38:
case 2356:
case 994:
case 874:
case 1368:
case 3180:
case 1238:
case 3271:
case 2472:
case 2102:
case 265:
case 2053:
case 220:
case 2146:
case 2685:
case 1245:
case 619:
case 416:
case 1023:
case 162:
case 308:
case 3683:
case 3699:
case 1720:
case 1039:
case 3168:
case 1380:
case 3981:
case 3562:
case 1219:
case 830:
case 1751:
case 2595:
case 3423:
case 2895:
case 2985:
case 3725:
case 3999:
case 3240:
case 3376:
case 3889:
case 192:
case 1587:
case 3862:
case 724:
case 1753:
case 3037:
case 2718:
case 1185:
case 3421:
case 1050:
case 745:
case 335:
case 2976:
case 2739:
case 2399:
case 3450:
case 1021:
case 1384:
case 1437:
case 2903:
case 499:
case 1600:
case 3237:
case 488:
case 1250:
case 2809:
case 3367:
case 696:
case 868:
case 2022:
case 3017:
case 3905:
case 2398:
case 2738:
case 3656:
case 3206:
case 3743:
case 2745:
case 1103:
case 1052:
case 181:
case 536:
case 523:
case 2251:
case 2075:
case 3564:
case 4091:
case 2601:
case 1565:
case 2305:
case 3452:
case 42:
case 367:
case 1864:
case 875:
case 995:
case 3865:
case 790:
case 3045:
case 1588:
case 1956:
case 912:
case 264:
case 2969:
case 2863:
case 3223:
case 2740:
case 3038:
case 2717:
case 2156:
case 2561:
case 3722:
case 2982:
case 3900:
case 2926:
case 1560:
case 1445:
case 2300:
case 3444:
case 2070:
case 403:
case 421:
case 3382:
case 1698:
case 3369:
case 3239:
case 3101:
case 3471:
case 3019:
case 810:
case 353:
case 2737:
case 1439:
case 3054:
case 1271:
case 3368:
case 1683:
case 1699:
case 3023:
case 588:
case 2025:
case 3902:
case 3245:
case 2453:
case 1891:
case 2072:
case 1981:
case 1562:
case 52:
case 1168:
case 1423:
case 2816:
case 2594:
case 1589:
case 1593:
case 3887:
case 2346:
case 2424:
case 1907:
case 3503:
case 2505:
case 1661:
case 1365:
case 3364:
case 2136:
case 3234:
case 1235:
case 4076:
case 287:
case 1936:
case 11:
case 3449:
case 2107:
case 993:
case 610:
case 1414:
case 1458:
case 1164:
case 3609:
case 2964:
case 276:
case 405:
case 1869:
case 3711:
case 1963:
case 2660:
case 1049:
case 3585:
case 1868:
case 871:
case 1191:
case 991:
case 2583:
case 3187:
case 444:
case 3034:
case 2466:
case 4067:
case 2116:
case 1215:
case 1880:
case 425:
case 675:
case 4003:
case 460:
case 209:
case 1990:
case 2689:
case 3448:
case 3695:
case 1778:
case 3731:
case 3391:
case 1387:
case 1434:
case 3576:
case 2662:
case 518:
case 1030:
case 2546:
case 1389:
case 2394:
case 642:
case 2734:
case 758:
case 2478:
case 3580:
case 1362:
case 87:
case 99:
case 1232:
case 1457:
case 976:
case 3430:
case 505:
case 1296:
case 185:
case 4069:
case 3994:
case 1995:
case 4082:
case 2031:
case 1885:
case 3412:
case 2211:
case 743:
case 326:
case 282:
case 146:
case 544:
case 1047:
case 3636:
case 1867:
case 3569:
case 1713:
case 3188:
case 3607:
case 3526:
case 384:
case 2361:
case 2665:
case 331:
case 2231:
case 2109:
case 3447:
case 2479:
case 418:
case 1803:
case 525:
case 1909:
case 560:
case 4080:
case 3692:
case 3160:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759514401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,];
var gg_b = "1759514401/";

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
